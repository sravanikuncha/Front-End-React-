import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    //add logic for updating the expense here
    case "EDIT_EXPENSE": {
      state.expenses[payload.index].text=payload.expense.text;
      state.expenses[payload.index].amount=payload.expense.amount;
      return {
        expenses: [...state.expenses]
      };
    }
    default:
      return state;
  }
};
// Use proper state management for populating the form in the expenseForm component on clicking the edit icon in the Transaction component
function App() {

  const [state, dispatch] = useReducer(reducer, { expenses: [] });

  const [update,setUpdate]=useState({update:false,index:-1});

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };



  const editExpense=(index,expense)=>{
    dispatch({ type: "EDIT_EXPENSE", payload: { expense ,index} });
    setUpdate({update:false,index:-1})
  };
  // Add dispatch function for updation
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
        addExpense={addExpense} 
        // Pass the props for populating the form with expense text and amount
        update={update} expenses={state.expenses} editExpense={editExpense}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            // Pass props to update a transacation
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
