import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Time = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.reducer1);
  const { isRunning, elapsedTime }=timer;

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
