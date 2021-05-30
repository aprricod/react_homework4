import React from "react";
import ReactDOM from "react-dom";
import Comp1 from "./Comps/Comp1";
import Comp2 from "./Comps/Comp2";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <p>Функциональный компонент</p>
    <Comp1 />
    <hr />
    <p>Классовый компонент</p>
    <Comp2 />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
