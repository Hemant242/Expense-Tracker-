import React from "react";
import "./Chartbar.css";

const Chartbar = (props) => {
  let barfillHeight = "0%";

  if (props.max > 0) {
    barfillHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          style={{ height: barfillHeight }}
          className='chart-bar__fill'></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default Chartbar;
