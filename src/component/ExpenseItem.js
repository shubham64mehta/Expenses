import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
   <div className="expense-item">
        <ExpenseDate data={props.date12} />
        <div className="expense_description">
          {props.title12}
        </div>
        <div className="price">
          ${props.amount12}
        </div>
   </div>
  );
}

export default ExpenseItem;
