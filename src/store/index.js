import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialCounterState={
    counter:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state, action){
            state.counter=state.counter+action.payload;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }

    }
})

const initialAuthState={
    isAuthenticated:false,
}

const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})


// Store
// const counterReducer=counterSlice.reducer;
// const store=createStore(counterReducer);

const store=configureStore({
    reducer:{
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    },
})

// Actions
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;


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


