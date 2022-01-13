import React from "react";
//import { useState } from "react";
import "./filter.css";
function Filter(props) {

  function dropdownHandler(event){
    props.onfilterHandler(event.target.value);
  }
  return (
    <div className="filter">
      <label>Filter by Year</label>
      <div className="space"></div>
      <select value={props.save} onChange={dropdownHandler}>
        <option value='2022' >2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
     
    </div>
  );
}

export default Filter;
