import React from "react";
import "./App.css";
import TableWorker from "./comps/TableWorker";
import { workers } from "./consts";

export default class App extends React.Component {
  state = { workers: workers };

  render() {
    return (
      <React.Fragment>
        <TableWorker workers={this.state.workers}></TableWorker>
      </React.Fragment>
    );
  }
}
