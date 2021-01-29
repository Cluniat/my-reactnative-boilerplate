# REDUX STORE

Here you'll find how to manage and create a Redux store using Redux, React-redux, Redux toolkit and Redux-persist.

## Description

The store folder contains everything to manage app global state. It's imported and used as a provider in the `App.js` file.

### index.js

This file declare all store states and their attached reducers. 

- Each reducer need to be declared here : 
```javascript
const rootReducer = combineReducers({
    auth: authReducer, //Here the example reducer you can add yours below
});
```

- If a state needs to be persisted (its value will not be erased when the app is closed), it has to be added in the whitelist in the persistConfig : 
```javascript
const persistConfig = {
    key: 'root',
    whitelist: ['auth'], //Here the example state auth is persisted, you can add yours in this list
    storage: AsyncStorage,
};
```
The rest of the file create and export the store and the persisted values.

### initialState.js

Defines the initial value of the state.

### actions.js

Defines the different actions that can be dispatched to do an action on the state. 
Thanks to redux toolkit it's possible to add a call to a service in the action to handle asynch calls easily.

### reducers.js

Triggered by an action, a reducer is the function that defines the change applied to the state. 

## Reading and updating a state

Let's see how everything work by the example of a user authentication. 

- Define auth state (token, login, error)
- dispatch login action (useDispatch)
    - Call the loading reducer
    - Make the api call 
    - Call the success / error reducer
    
- reducers update the state (loading, error and token values are updated) which can be accessed from the hook `useSelector`
