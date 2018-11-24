import React from "react";
import Layout from "./layout.jsx";
import Menu from "./menu.jsx";
import DetailsContainer from "../containers/details_container.jsx";

const Body = () => {
  var style = {
    display: "flex",
    height: 480,
    minWidth: 960
  };
  return (
    <div style={style}>
      <DetailsContainer />
      <Layout />
      <Menu />
    </div>
  );
};

export default Body;
