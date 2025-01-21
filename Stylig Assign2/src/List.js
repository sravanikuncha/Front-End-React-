import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {

    const todoList=this.props.todo;
    return (
      <div className="list">
        {todoList.map((eachText,index)=><Todo todo={eachText} index={index} handleRemove={this.props.handleRemove}/>)}
      </div>
    );
  }
}
