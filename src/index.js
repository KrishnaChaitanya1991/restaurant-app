import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/app.jsx";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
