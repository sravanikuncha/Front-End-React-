import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { alertSelector } from "../redux/reducers/alertReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { alertActions } from "../redux/reducers/alertReducer";

export const Timer = () => {
  // get alert message here
  const {message}=useSelector(alertSelector);
  const dispatcherFn=useDispatch();

  console.log(message);

  // create effect to reset alert message here
  if(message){
    setTimeout(()=>{
      dispatcherFn(alertActions.reset());
    },2000)
  }

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div>{message}</div>}
      <div className="alert"></div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
