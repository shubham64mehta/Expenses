import { useState } from "react";
import React from "react";
import "./UserInput.css";

function UserInput(props) {

    const [enteredTitle,setenteredTitle] = useState('');
    function titleHandler(event){
        setenteredTitle(event.target.value);
       // console.log(enteredTitle);

    }

    const [enteredAmount,setenteredAmount] = useState('');
    function amountHandler(event){
        setenteredAmount(event.target.value);

    }

    const [enteredDate,setenteredDate] = useState('');
    function dateHandler(event){
        setenteredDate(event.target.value);

    }

    function submitHandler(event){
      event.preventDefault();

      const expensedata={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
      };

      props.onSavedForm(expensedata);
      setenteredTitle('');
      setenteredAmount('');
      setenteredDate('');

    }

    function oncancelHandler1()
    {
      props.oncancelHandler();
    }
    
  return (
    <form onSubmit={submitHandler}>
      <div className="desgin">
        <div className="amount">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle}/>
        </div>
        <div className="amount">
          <label>Amount</label>
          <input type="number" onChange={amountHandler} value={enteredAmount} />
        </div>
        <div className="amount">
          <label>Date</label>
          <input type="date" onChange={dateHandler} value={enteredDate} />
        </div>
      </div>
       <div className="button_position">
        <button className="action" onClick={oncancelHandler1}>Cancel</button>
        <button className="action" type="submit">Add Expenses</button>
        </div>
    </form>
  );
}

export default UserInput;
