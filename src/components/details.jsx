import React from "react";
import OrderListContainer from "../containers/order_list_container.jsx";
import ToggleTableContainer from "../containers/toggle_table_container.jsx";

const Details = props => {
  var style = {
    width: 160,
    height: 480,
    backgroundColor: "green",
    textAlign: "center"
  };

  var total = 0;
  if (props.selectedTable !== null) {
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price;
    }
  }
  return (
    <div style={style}>
      <h2>Table #: {props.selectedTable}</h2>
      <ToggleTableContainer />

      <h2>Bill Total: {total}</h2>

      <h2>Orders: </h2>
      <OrderListContainer />
    </div>
  );
};

export default Details;
