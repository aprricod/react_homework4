import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <p>"Была нажата кнопка"</p>
          <button onClick={this.handleClick}>Поменять состояние</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Поменять состояние</button>
        </div>
      );
    }
  }
}

Comp2.defaultProps = { name: "Ivan" };
