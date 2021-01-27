# React native boilerplate

## Dependencies

- React native async storage  

- React navigation  

- Axios  

- i18next + react-i18next  

- React native appearance (dark/light theme handling)

- React native splash screen 

## Architecture

### Assets

Contains all images and icons of the app. It can also contain fonts files.

### Components

Contains generic components with no intelligence (all data are given to them by the props) in order to be as reusable as possible.

### Config

All env variables are described in the `environnements.js` file. For each env you need to specify all variables
 a color and a name to show the user in which env the app is running (usefull for tests phases).
 Then, the current environment need to be set in the `index.js` file.

### Containers

Contains components corresponding to screens of the application. They contain all the intelligence of the app and load all data that need to be loaded.

### Store

Store Redux permettant une gestion du state global. Ecriture simplifiée grâce à Redux Toolkit. Documentation à venir.

### Navigation

Contains all the navigators of the app and the Route names definitions.

### Services

Contains all API calls and Axios instance.

### Theme

Centralizes the style of the application (everything is described in another [README](./app/Theme/README.md) into the `Theme` folder)

## How to use ?

### Requirements

Follow the React-Native documentation to set up your environment [here](https://reactnative.dev/docs/environment-setup)  
/!\ Follow the guidelines from the `React Native CLI QuickStart` tab, without Expo.

### Creating project

- Clone this repo

- Remove git history: `rm -rf .git/`

- Rename project (using [react-native-rename](https://github.com/junedomingo/react-native-rename)):
   
    - install globally : `yarn global add react-native-rename`
   
    - run: `npx react-native-rename <NewName>`
    
### Set up project

- Install dependencies: `yarn`

- Install ios native dependencies: 

```
cd ios
pod install
```

### Run project

- In one command window run: `yarn start` to open metro bundler (logs will appear here)

- In another command window run:

    - android: `yarn android`
    
    - ios: `yarn ios`

## Deployment

Using fastlane. You can find how to set up Fastlane lanes to deploy beta builds on stores
[here](./Fastlane.md)
