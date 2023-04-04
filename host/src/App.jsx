import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { Counter } from "remote/Counter";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
