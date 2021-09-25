import React from "react";
import ExpenseItem from "../components/Expenses/ExpenseItem";
import "./ExpenseList.css"

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>There is no space</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
