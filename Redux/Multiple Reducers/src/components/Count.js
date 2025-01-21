import { useSelector } from "react-redux";

export const Count = () => {
  const counter= useSelector((state) => state.reducer2);
  const { count } =counter;
  return <b>{count}</b>;
};
