import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Create function to add an expense

  const addExpense=(expense)=>{
    setExpenses([...expenses,expense]) 
  }

  // Create function to delete an expense
  const deleteExpense=(i)=>{
    console.log(`transaction delete expense ${i}`)
    const expenseList=expenses.filter((currentEle,index)=>index!=i);
    setExpenses(expenseList) 
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
        </div>
      </div>
    </>
  );
}

export default App;
