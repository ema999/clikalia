import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    window.location.href = "/error";
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
