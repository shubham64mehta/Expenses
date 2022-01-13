import React from 'react';
import './ExpenseDate.css';
function ExpenseDate(props)
{
    const month = props.data.toLocaleString('en-US', { month: 'long' });
    const day = props.data.toLocaleString('en-US', { day: '2-digit' });
    const year = props.data.getFullYear();
    return(
        <div className="expense-date">
        <div className="expense-date_month">{month}</div>
        <div className="expense-date_day">{day}</div>
        <div className="expense-date_year">{year}</div>
        </div>
    );
}

export default ExpenseDate;