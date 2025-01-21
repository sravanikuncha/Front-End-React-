import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { Todo } from "./Todo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    this.state.todos.push({"text":text});
    const newTodo=[...this.state.todos];
    // const newTodo = [...this.state.todos, { text }];
    this.setState({todos:newTodo});
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    const newTodo=this.state.todos.filter((eachText,i)=>i!=index);
    console.log(newTodo);
    this.setState({todos:newTodo});
  };
  render() {
    console.log("rerendered")
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd}/>
        <List todo={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
