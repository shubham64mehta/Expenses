import React from "react";
import "./expenselist.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expense-fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date12={expense.date}
          title12={expense.title}
          amount12={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
