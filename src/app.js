import React from "react";
import Expenses from "./component/Expenses";
import Form from "./userinput/form";
import { useState } from "react";

const expenses1 = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses12,setExpenses]=useState(expenses1);


  function addexpenses(newexpenses) {
    setExpenses((prevstate)=>{
      return[newexpenses,...prevstate];
    });
  }

  return (
    <div>
      <Form add={addexpenses} />
      <Expenses items={expenses12} />
    </div>
  );
}

export default App;
