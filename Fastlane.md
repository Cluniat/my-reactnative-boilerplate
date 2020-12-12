# FASTLANE SET UP

Fastlane is an open source platform designed to simplify Android and IOS deployment by automating it.

Here you can find some lanes and instructions to deploy apps.

## Installing fastlane

1. Install latest Xcode command line tools:

    ```
    xcode-select --install
    ```
   
2. Install Fastlane

    ```
    brew cask install fastlane
    ```
   
## IOS

### Requirements

- Install React Native required dependencies
- Add .gitignore in the `ios` directory
```gitignore
# fastlane specific
fastlane/report.xml

# deliver temporary files
fastlane/Preview.html

# snapshot generated screenshots
fastlane/screenshots

# scan temporary files
fastlane/test_output

# fastlane builds
builds/*
*.xcarchive
```

#### On Xcode

- Choose bundle identifier of the app  
`General` tab, `Identity` section, `bundle identifier`  
- Apple ID with admin user (username and password)  
`Signin & Capabilities` tab, `Signing` section, disable `Automatically manage signing`  
- In the `Build Settings tab`, `Signing` section and `Code Signing Identity`, set `Apple Development` for the debug line (including Any iOS SDK) 
and set `iOS Distribution` for the release line (including Any iOS SDK)  
- Create app icon (without it you'll get an error running beta build). You can do it with [appicon.co](https://appicon.co/).  
/!\ This icon  can't be transparent nor contain an alpha channel.

### Fastlane Setup

From your project folder : 
```
cd ios
fastlane init
```
Answer to the following questions : 

- `What would you like to use fastlane for?`
    - `2 - Automate beta distribution to TestFlight`
- `Select Scheme`
    - The one **WITHOUT** `tvOS`
- `Apple ID Username`, `Apple ID Password`
    - Your Apple ID username + password
- If you haven't already created the App on Developper Portal, Fastlane will do it by asking:
    - `Do you want fastlane to create the App ID for you on the Apple Developer Portal / App Store Connect? (y/n)`
        - Answer `y`
    - `App Name : `
        - Your app name
- Else ( you already created the app on Developer Portal), you will just have a message telling that the app is available.

#### /!\ Stuck at bundle install or bundle update running fastlane init

If the fastlane init process is stuck when running `bundle install` or `bundle update` it may mean that bundle command is asking for root permissions.
You can stop the process and retry again with `sudo fastlane init`, however you will need to change back ownership of the generated files to your user when it finishes by running this command:
```
sudo chown <your-user> <files>
```

**Now Fastlane has generated some files !**  
In the `ios` folder you can find a `fastlane` folder containing 2 files : 

- `Appfile` (contains identifiers to connect to Developer portal and app store connect)  
*If the project is going to be deployed by several apple users (not always the same apple id), you can delete
the line : `apple_id("") # Your Apple email address)`. Now fastlane will ask for the apple_id before building, so you
don't have to change anything in `Appfile`.*
- `Fastfile` (contains actions you can launch, default lane increment the build number, build your app and upload it to TestFlight)

### Code Signing

#### Create or get certificate

Add the following to `Fastfile`, just after `increment_build_number` function and before `build_app` : 
```
get_certificates( # Create or get distribution certificate, and install it
        output_path: "./builds" # Download certificate in the build folder (you don't need to create the folder)
    )
    get_provisioning_profile( # Create or get provisioning profile
        output_path: "./builds",  # Download provisioning profile in the build folder
        filename: "provisioning.mobileprovision" # Rename the local provisioning profile
    )
    update_project_provisioning( # Set the project provisioning profile (related in Xcode to the General > Signing Release section)
        xcodeproj: "fastlaneTestProject.xcodeproj", #Change this line according to your project
        target_filter: "fastlaneTestProject", # Change this line with the name of your project
        profile: "./builds/provisioning.mobileprovision",
        build_configuration: "Release"
    )
    update_project_team( # Set the right team on your project
        teamid: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)
    )
```

#### Configure provisioning profile
Add the following to `Fastfile`, inside `build_app` function, just after `scheme` parameter :
```
, clean: true,
    export_method: "app-store",
    export_options: {
      provisioningProfiles: {
          CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) => CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) + " AppStore" # Value of this parameter is the name of the Provisioning Profile. By default, it will be "{bundleId} AppStore"
      }
    },
    build_path: "./builds",
    output_directory: "./builds"
```

**Now the app is ready to be built**

### Creating beta build

To create a build and upload it to Testflight, just type into the `ios` folder of the project : 
```
fastlane beta
```

## Android

### Requirements

- Create an application on the Google Play Console (unlike for IOS, Fastlane can't do that for you).
- Add .gitignore in the `android` directory
```
# fastlane specific
fastlane/report.xml

# deliver temporary files
fastlane/Preview.html

# snapshot generated screenshots
fastlane/screenshots

# scan temporary files
fastlane/test_output

# Fastlane builds
builds/*

# too large file
*.hprof
```
- [Collect your Google Credentials](https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials)
- [Generate an upload key and keystore](https://developer.android.com/studio/publish/app-signing#generate-key)
### Fastlane setup

From your project folder :
```
cd android
fastlane init
```
Answer to the following questions : 

- `Package Name`
    - Your package name
- `Path to the json secret file`
    - `key.json` (the previously created file in requirements step)
- `Download existing metadata and setup metadata management?`
    - `y`

Then Fastlane will print some info, just press `enter` to continue.

**Now Fastlane has generated some files !**  

In the `android` folder you can find a `fastlane` folder containing 2 files : 

- `Appfile` (contains identifiers to connect to Google Play and link to key.json file.)  
- `Fastfile` (contains actions you can launch, `deploy lane` and `test lane`by default)

Remove the `deploy lane` to avoid some mistakes and replace it with : 
```
desc "Submit a new Beta Build to Play Store"
   lane :beta do
     store_password = prompt(text: "Signing Store Password: ", secure_text: true)
     key_password = prompt(text: "Alias Key Password: ", secure_text: true)
     releaseFilePath = File.join(Dir.pwd, "..", "keystore") //Your path to the keystore file
     increment_version_code(gradle_file_path: "app/build.gradle") //increment the build number
     gradle(task: 'clean')
     gradle(
       task: 'assemble',
       build_type: 'Release',
       print_command: false,
       properties: {
         "android.injected.signing.store.file" => releaseFilePath,
         "android.injected.signing.store.password" => store_password,
         "android.injected.signing.key.alias" => "leclercandroidkey",
         "android.injected.signing.key.password" => key_password,
       }
     )
     upload_to_play_store(
       track: 'internal'
     )
 end
```

**Now the app is ready to be built**

### Creating beta build

To create a build and upload it to Testflight, just type into the `android` folder of the project : 
```
fastlane beta
```










