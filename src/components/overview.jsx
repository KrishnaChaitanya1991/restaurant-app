import React from "react";

const Overview = props => {
  // gets tableStatusData, moneyEarned
  var style = {
    width: 960,
    height: 160,
    backgroundColor: "red",
    textAlign: "center"
  };
  let available_tables = 0;
  for (let i = 0; i < props.tableStatusData.length; i++) {
    if (!props.tableStatusData[i]) available_tables++;
  }
  return (
    <div style={style}>
      <h1> This is Nanis Restaurant </h1>
      <h2>
        AvailableTables: {available_tables}/{props.tableStatusData.length}
      </h2>
      <h2> Money Earned: {props.moneyEarned} </h2>
    </div>
  );
};

export default Overview;
