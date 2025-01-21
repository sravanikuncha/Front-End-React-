import "./App.css";
import React,{useEffect, useState} from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";



// export default class App extends React.Component {
export default function App(){
  // Create state for the expenses here
  
  const [transactionList,setTransactionList]=useState([]);

  // render() {
  const handleAddTransaction=(transaction)=>{
    setTransactionList([...transactionList,transaction]) 
  }
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          <ExpenseForm handleAddTransaction={(transaction)=>handleAddTransaction(transaction)}/>
          <div className="expenseContainer">
            <ExpenseInfo transactions={transactionList}/>
            <ExpenseList transactions={transactionList}/>
          </div>
        </div>
      </>
    );
  // }
}
