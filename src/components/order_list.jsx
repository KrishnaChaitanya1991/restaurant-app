import React from "react";

const OrderList = props => {
  var style = {
    textAlign: "left",
    marginLeft: 20
  };
  console.log("props", props);

  if (props.selectedTable === null) return null;
  console.log("items", props);
  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div id={"item" + i}>
            <button onClick={() => props.onDelete(props.selectedTable, i)}>
              x
            </button>
            &nbsp; {items.name} | ${items.price}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
