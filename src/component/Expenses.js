import React from "react";
import Filter from "../ExpenseFilter/filter";
import { useState } from "react";
import "./expenses.css";
import ExpensesList from "./expenselist";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filter, setfilter] = useState("2019");
  function filterHandler(check) {
    setfilter(check);
    //console.log(filter)
  }

  const filterexpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filter;
  });

  return (
    <div className="expenses">
      <Filter save={filter} onfilterHandler={filterHandler} />
      <ExpenseChart expenses={filterexpenses}/>
      <ExpensesList items={filterexpenses} />
    </div>
  );
}

export default Expenses;
