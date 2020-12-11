import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

// const loggedInUser = localStorage.getItem("user");
// if (loggedInUser) {
//   const foundUser = JSON.parse(loggedInUser);
//   setUser(foundUser);
// }

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
