import React from 'react'
import "./Chart.css";
import Chartbar from './Chartbar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);    
    return (
        <div className = "chart">
            {props.dataPoints.map((datapoint) =>{ return (
            <Chartbar key={datapoint.label} value={datapoint.value} max={totalMaximum} label = {datapoint.label}/>
            )})}
        </div>
    )
}

export default Chart
