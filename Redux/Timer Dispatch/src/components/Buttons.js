import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pauseTimer, resetTimer, startTimer } from "../redux/actions/timerActions";

export const Buttons = () => {
  const { isRunning } = useSelector((state) => state);

  const disptacher=useDispatch();

  return (
    <div className="actions">
      {/* disptach startTimer action here */}
     
      <button onClick={()=> disptacher(startTimer())} disabled={isRunning}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      {/* disptach pauseTimer action here */}
      <button onClick={()=>{ disptacher(pauseTimer());}} disabled={!isRunning}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      {/* disptach resetTimer action here */}
      <button onClick={()=>disptacher(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
