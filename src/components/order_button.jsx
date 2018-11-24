import React from "react";

const OrderButton = props => {
  let style = {
    width: 80,
    height: 80
  };

  return (
    <div>
      <button
        disabled={
          props.selectedTable === null ||
          props.tableStatusData[props.selectedTable] === false
        }
        onClick={() => {
          console.log("Order clicked");
          props.onAdd(props.name, props.price, props.selectedTable);
        }}
        style={style}
      >
        ${props.price} {props.name}
      </button>
    </div>
  );
};

export default OrderButton;
