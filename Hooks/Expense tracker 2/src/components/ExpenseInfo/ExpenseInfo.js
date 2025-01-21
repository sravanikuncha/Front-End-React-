import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const expenses=props.expenses;


  const totalAmount=expenses.reduce((acc,currentEle)=>acc+Number(currentEle.amount),0);
  
  const positiveArray=expenses.filter((eachTransaction)=>Number(eachTransaction.amount)>0);
  const positiveAmount=positiveArray.reduce((acc,currentEle)=>acc+Number(currentEle.amount),0);

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
};

export default ExpenseInfo;
