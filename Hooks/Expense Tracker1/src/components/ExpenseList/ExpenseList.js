import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

// export default class ExpenseList extends React.Component {
export default function ExpenseList(props){
  // render() {
  const transactions=props.transactions;
  console.log('expense list')
  console.log(props.transactions)

    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
        {transactions.map((eachTransaction,index)=><Transaction index={index} eachTransaction={eachTransaction}/>)}
        </ul>
      </div>
    );
  // }
}
