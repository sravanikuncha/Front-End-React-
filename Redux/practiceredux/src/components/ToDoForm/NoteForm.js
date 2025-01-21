import "./ToDoList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { addNote } from "../../redux/actions/todoAction";
 function NoteForm() {


  const dispatcherFn=useDispatch();
  const notes=useSelector((state)=>state.reducer2.notes);
  todos=useSelector((state)=>state.reducer1.todos);
 

  console.log(todos);
  console.log(notes);
  return (
    <div className="container">
    <ul>
      {/* {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatcherFn(toggleToDo(index))}}
          >Toggle</button>
          </li>
      ))} */}
     {/* {notes.map((note,index) => (
        <li key={note.id}>
          <span className="content">{note.noteText}</span>
          </li>
      ))} */}

    </ul>
    </div>
  );
}

export default NoteForm;
