import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;

//toISOString() is a build-in method available for the Date objects which allow
//to use Date objects in JS HTML (JSX). Without it, Date object will not work.

//toLocaleString() returns a date as a string, using locale settings
