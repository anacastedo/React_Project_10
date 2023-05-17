import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({type:'INC_COUNTER', payload: {amount: 10}});
    }
    const decrementHandler = () => {
        dispatch({type:'DEC_COUNTER'});
    }
    const toggleCounterHandler = () => {
        dispatch({type:'TOGGLE_COUNTER'});
    }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
