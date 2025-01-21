import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
  const expenses=props.expenses;
  const deleteExpense=props.deleteExpense;
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
      {expenses.map((eachExpense,index)=><Transaction key={eachExpense} index={index} expense={eachExpense} deleteExpense={deleteExpense}/>)}
      </ul>
    </div>
  );
};

export default ExpenseList;
