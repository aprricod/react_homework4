import React from "react";
import ReactDOM from "react-dom";
import Comp1 from "./Comps/Comp1";
import Comp2 from "./Comps/Comp2";
import Comp3 from "./Comps/Comp3";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <p>Вариант 1</p>
    <Comp1 />
    <hr />
    <p>Вариант 2</p>
    <Comp2 />
    <hr />
    <p>Вариант 3</p>
    <Comp3 />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
