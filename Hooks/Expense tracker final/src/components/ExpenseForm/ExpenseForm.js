import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense ,update,expenses,editExpense}) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();
  console.log("Expene form render ")

  // Use the useEffect hook here, to check if an expense is to be updated
    useEffect(()=>{
      if(expenseAmountInput.current && expenseTextInput.current && update.update){
        expenseAmountInput.current.value = expenses[update.index].amount;
        expenseTextInput.current.value = expenses[update.index].text;
        expenseTextInput.current.focus();
      }
    },[update])
  // If yes, the autofill the form values with the text and amount of the expense
    
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: new Date().getTime()
    };

    if(update.update){
      editExpense(update.index,expense);
    }
    else{
      addExpense(expense);
    }
    clearInput();
    return;

    // Logic to update expense here
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {update.update?"Edit transaction":"Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
