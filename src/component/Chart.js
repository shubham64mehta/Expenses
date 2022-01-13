import React from "react";
import "./Chart.css";
import ChartBar from "./Chartbar";
function Chart(props) {
    const valuearray=props.datapoints.map(datapoint=>datapoint.value);
    const max1= Math.max(...valuearray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          label={datapoint.label}
          value={datapoint.value}
          maxValue={max1}
        />
      ))}
    </div>
  );
}

export default Chart;
