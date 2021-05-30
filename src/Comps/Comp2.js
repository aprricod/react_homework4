import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <button onClick={this.handlerClick}>
        Нажали {this.state.counter} раз
      </button>
      // ниже тоже рабочий вариант без использованиия this.handlerClick
      // <button
      //   onClick={() => this.setState({ counter: this.state.counter + 1 })}
      // >
      //   Нажали {this.state.counter} раз
      // </button>
    );
  }
}
