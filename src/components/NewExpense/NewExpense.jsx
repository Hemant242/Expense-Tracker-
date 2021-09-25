import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./new-expense.css";

const NewExpense = (props) => {

  const savedDataHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setisEditing(false)
    
  };

  const [isEditing ,setisEditing ] = useState(false)

  const isEditingHandler = () =>{
    setisEditing(true)
  }

  const canceleditingHandler =() =>{
    setisEditing(false)
  }

  return (
    <div className='new-expense'>
    {!isEditing &&<button onClick={isEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm cancel = {canceleditingHandler} onsavedData={savedDataHandler} />}
    </div>
  );
};

export default NewExpense;
