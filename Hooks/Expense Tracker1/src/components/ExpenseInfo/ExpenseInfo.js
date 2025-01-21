import React from "react";
import styles from "./ExpenseInfo.module.css";

// export default class ExpenseInfo extends React.Component {
  export default function ExpenseInfo(props){
  // render() {
  const transactions=props.transactions;


  const totalAmount=transactions.reduce((acc,currentEle)=>acc+Number(currentEle.Amount),0);
  
  const positiveArray=transactions.filter((eachTransaction)=>eachTransaction.Amount>0);
  const positiveAmount=positiveArray.reduce((acc,currentEle)=>acc+Number(currentEle.Amount),0);

  const negativeAmount=totalAmount-positiveAmount;


    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${totalAmount}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${positiveAmount}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${negativeAmount}
            </p>
          </div>
        </div>
      </div>
    );
  // }
}
