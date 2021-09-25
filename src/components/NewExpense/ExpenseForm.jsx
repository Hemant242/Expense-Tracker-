import React, { useState } from "react";
import "./expense-form.css";

const ExpenseForm = (props) => {
  const [Enteredtitle, setTitle] = useState("");
  const [Enteredamount, setamount] = useState("");
  const [EnteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(setTitle);
  };

  const amountchangeHandler = (event) => {
    setamount(event.target.value);
  };

  const datechangeHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Enteredtitle,
      amount: +Enteredamount,
      date: new Date(EnteredDate),
    };
    setDate("");
    setTitle("");
    setamount("");

    props.onsavedData(expenseData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            required
            placeholder='Title'
            onChange={titleChangeHandler}
            value={Enteredtitle}
            type='text'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            required
            placeholder='Amount'
            value={Enteredamount}
            onChange={amountchangeHandler}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            required
            value={EnteredDate}
            placeholder='Date'
            onChange={datechangeHandler}
            type='date'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.cancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
