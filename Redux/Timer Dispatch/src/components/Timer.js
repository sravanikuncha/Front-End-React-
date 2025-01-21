import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Timer = () => {
  const { isRunning, elapsedTime } = useSelector((state) => state);

  const disptacher=useDispatch();


  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // disptach incrementTimer action here
        disptacher(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return <b>{elapsedTime}</b>;
};
