import React, { Component } from "react";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Первичное состояние",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Была нажата кнопка",
    });
  }

  render() {
    const name = this.state.name;
    return (
      <div>
        <p>{name}</p>
        <button onClick={this.handleClick}>Поменять состояние</button>
      </div>
    );
  }
}

Comp1.defaultProps = { name: "Ivan" };
