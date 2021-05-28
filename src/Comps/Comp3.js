import React, { Component } from "react";

export default class Comp3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => ({
      count: this.state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: this.state.count - 1,
    }));
  }
  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
