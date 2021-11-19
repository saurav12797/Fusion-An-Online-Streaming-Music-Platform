import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { DataLayer } from "./views/DataLayer/Index";
import reducer, { initialState } from "./views/Reducer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
