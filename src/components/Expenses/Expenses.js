import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter";
import ExpenseList from "../ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const changeExpenseHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          year={year}
          onChangeExpensefilter={changeExpenseHandler}
        />
        <ExpensesChart expenses={filteredYear} />

        <ExpenseList items={filteredYear} />
      </Card>
    </li>
  );
};

export default Expenses;
