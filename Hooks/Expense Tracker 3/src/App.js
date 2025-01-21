import { useState,useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function changeExpense(state,action){
  switch(action.type){
    case "add":{
      return {expenses:[...state.expenses,action.expense]};
    }
    case "delete":{
      return {expenses:state.expenses.filter((currentEle,index)=>currentEle.id!=action.i)};
    }
    default:
      return {expenses:state.expenses};
  }
}

function App() {

  const [state,dispatch]=useReducer(changeExpense,{ expenses: [] });
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  const addExpense=(expense)=>{
    dispatch({type:"add",expense});
  }

  const deleteExpense=(i)=>{
    dispatch({type:"delete",i});
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
      <ExpenseForm addExpense={addExpense}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList expenses={state.expenses} deleteExpense={deleteExpense}/>
        </div>
      </div>
    </>
  );
}

export default App;
