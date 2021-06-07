import React from "react";

export default class TableWorker extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Дней отработано</th>
              <th>Дневная ставка</th>
              <th>Заработано</th>
            </tr>
          </thead>
          <tbody>
            {this.props.workers.map((worker, index) => (
              <tr key={worker.name + index}>
                <td>
                  {worker.name} {worker.surname}
                </td>
                <td>{worker.daysCount}</td>
                <td>{worker.daySalary}</td>
                <td>{worker.daySalary * worker.daysCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
