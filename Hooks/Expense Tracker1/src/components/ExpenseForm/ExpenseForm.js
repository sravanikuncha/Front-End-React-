import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";



// export default class ExpenseForm extends React.Component {
export default function ExpenseForm(props){
  // Create state or ref for the inputs here

  const [transaction,setTransaction]=useState({text:"", Amount:0});
  // render() {

  const handleTransaction=(e)=>{
    e.preventDefault();
    props.handleAddTransaction(transaction);
    setTransaction({text:"", Amount:0})
  }

    return (
      <form className={styles.form} onSubmit={() => {}}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          value={transaction.text}
          onChange={(e)=>setTransaction({text:e.target.value,Amount:transaction.Amount})}
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
          onChange={(e)=>setTransaction({text:transaction.text,Amount:e.target.value})}
          value={transaction.Amount}
          required
        />
        <button className={styles.submitBtn} onClick={(e)=>handleTransaction(e)}>Add Transaction</button>
      </form>
    );
  // }
}
