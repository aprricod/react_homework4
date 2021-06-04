import React from "react";
import "./App.css";
import Scooters from "./Scooters";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scooters: [
        {
          marked: false,
          name: "Xiaomi Mi Electric Scooter Pro 2",
          chargeLevel: 34,
          costPerHour: 1.4,
          img: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=MSXI12a4",
        },
        {
          marked: false,
          name: "Xiaomi Mi Electric Scooter 1S EU",
          chargeLevel: 53,
          costPerHour: 6.4,
          img: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=MSXI12a2",
        },
        {
          marked: false,
          name: "Street Surfing VOLTAIK MGT 350",
          chargeLevel: 34,
          costPerHour: 1.4,
          img: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SPTepic083",
        },
        {
          marked: false,
          name: "Ninebot eKickscooter ZINGE8",
          chargeLevel: 53,
          costPerHour: 6.4,
          img: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=NINE32",
        },
      ],
    };
  }

  handleMarked(name) {
    const scooters = this.state.scooters.concat();
    const scooter = scooters.find((c) => c.name === name);
    scooter.marked = !scooter.marked;
    this.setState({
      scooters: scooters,
    });
    console.log(name);
  }

  renderScooter() {
    return this.state.scooters.map((scooters) => {
      return (
        <Scooters
          scooters={scooters}
          key={scooters.name + Math.random()}
          onMark={this.handleMarked.bind(this, scooters.name)}
        />
      );
    });
  }

  render() {
    return (
      <div className="App">
        <div className="list">{this.renderScooter()}</div>
      </div>
    );
  }
}
