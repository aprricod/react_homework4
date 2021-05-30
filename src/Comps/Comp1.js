import React, { Component } from "react";

export default class Comp1 extends Component {
  handler = () => {
      
  };
  render() {
    return (
      <div>
        <h1>State</h1>
        <div>
          <button onClick={this.handler}>Изменение state</button>
        </div>
      </div>
    );
  }
}
