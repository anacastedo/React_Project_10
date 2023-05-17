import {createSlice, configureStore} from '@reduxjs/toolkit';


const initialState={
    counter:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,  // or just initialState
    reducers:{
        increment(state, action){
            state.counter=state.counter+action.payload.amount;
        },
        decrement(state){
            state.counter--;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }

    }
})

// Store
// const counterReducer=counterSlice.reducer;
// const store=createStore(counterReducer);

const store=configureStore({
    reducer:counterSlice.reducer, //it can be an object of reducers
})

// Subscription
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
}
)


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


