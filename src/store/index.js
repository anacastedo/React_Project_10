import {configureStore} from '@reduxjs/toolkit';
// import counterSlice from "./counter";
// import authSlice from "./auth";
import counterReducer from "./counter";
import authReducer from "./auth";


const store=configureStore({
    reducer:{
        counter: counterReducer,
        auth: authReducer
    },
})



export default store;


// Redux Middleware
//
//
// Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
//
//     Middleware is a function that takes an action and either dispatches another action or does nothing.
//
//     It is a way to extend Redux with custom functionality.
//
//     It lets you wrap the store’s dispatch method for fun and profit.
//
//     It is a way to intercept and act on actions that have been dispatched to the store.
//
//     It is a way to do asynchronous actions like AJAX calls.
//
//     It is a way to do logging, crash reporting, talking to an asynchronous API, routing, and more.


