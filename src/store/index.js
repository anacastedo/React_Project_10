import {createStore} from 'redux';


const initialState={
    counter:0,
    showCounter:true
}

// Reducer
const counterReducer=(state=initialState,action)=>{
    if(action.type==='INC_COUNTER'){
        return{
            ...state,
            counter:state.counter+action.payload.amount,
            showCounter: state.showCounter
        }
    }
    if(action.type==='DEC_COUNTER'){
        return{
            ...state,
            counter:state.counter-1,
            showCounter: state.showCounter
        }
    }

    if(action.type==='TOGGLE_COUNTER'){
        return{
            ...state,
            counter: state.counter,
            showCounter:!state.showCounter
        }
    }
    return state;
}

// Store
const store=createStore(counterReducer);
console.log(store.getState());

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


