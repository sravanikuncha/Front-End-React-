import { useSelector } from "react-redux";
// add action creators imports here
import {useDispatch} from 'react-redux';
import { decrement, increment, reset } from "../redux/actions/counterActions";


export const CounterActions = () => {
  console.log(useSelector((state)=>state));
  const  counter= useSelector((state) => state.reducer2);
  const { count }=counter;

  const dispatcherFn=useDispatch();

  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button onClick={()=>dispatcherFn(decrement())} disabled={count <= 0}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button onClick={()=>dispatcherFn(increment())} disabled={count >= 10}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={()=>dispatcherFn(reset())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
