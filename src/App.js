import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workers: [
        {
          marked: false,
          name: "Ken",
          surname: "Block",
          daysCount: 34,
          daySalary: 2,
        },
        {
          marked: false,
          name: "Ivan",
          surname: "Petrov",
          daysCount: 42,
          daySalary: 2,
        },
        {
          marked: false,
          name: "Vova",
          surname: "Kotov",
          daysCount: 11,
          daySalary: 4,
        },
        {
          marked: false,
          name: "Jaims",
          surname: "Brown",
          daysCount: 21,
          daySalary: 4,
        },
      ],
    };
  }

  render() {
    const newCard = ({ name, surname, daysCount, daySalary }) => {
      return (
        <table key={(name.toString(), surname.toString())}>
          <tr>
            <th>ФИО</th>
            <th>Дней отработано</th>
            <th>Дневная ставка</th>
            <th>Заработано</th>
          </tr>
          <tr>
            <td>
              {name} {surname}
            </td>
            <td>{daysCount}</td>
            <td>{daySalary}</td>
            <td>{{ daySalary } * { daysCount }}</td>
          </tr>
        </table>
      );
    };
    return (
      <div className="App">
        <div>{this.state.workers.map((props) => newCard(props))}</div>
      </div>
    );
  }
}
