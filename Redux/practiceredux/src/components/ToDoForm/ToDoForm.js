import { useState } from "react";
// import "./ToDoForm.css";
import { useDispatch } from "react-redux";
// import { addToDO } from "../../redux/actions/todoAction";
// import { addNote } from "../../redux/actions/todoAction";
import { todoActions } from "../../redux/reducers/todoReducer";
import { noteActions } from "../../redux/reducers/additionalReducer"; 
import { notificationSelector } from "../../redux/reducers/notificationnReducer";
import { useSelector } from "react-redux";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");

  const dispatcherFn=useDispatch();
  const message=useSelector(notificationSelector);
  console.log("nowsbds");
  console.log(notificationSelector)


  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
   
  };

  const handleTodo=()=>{
    // dispatcherFn(addToDO(todoText));
    dispatcherFn(todoActions.add(todoText));
    setTodoText("");
  }

  const handleNote=()=>{
    // dispatcherFn(addNote(todoText));
    dispatcherFn(noteActions.add(todoText))
    setTodoText("");
  }

  return (
    <div className="container">
      <div>{message}</div>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleTodo} className="btn btn-success float-end" type="submit">Create Todo</button>
      <button onClick={handleNote} className="btn btn-success float-end" type="submit">CreateNote</button>
    </form>
    </div>
  );
}

export default ToDoForm;
