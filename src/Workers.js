import React from "react";

function Workers(props) {
  return (
    <div>
      <h3>{props.workers.name}</h3>
      <ul>
        <li>Остаток заряда: {props.workers.surname}%</li>
        <li>Стоимость в час: ${props.workers.dayCount}</li>
      </ul>
    </div>
  );
}
export default Workers;

// const classes = ["card"];

// if (props.scooters.marked) {
//   classes.push("marked");
// }

//   return (
//     <div>
//       <div className={classes.join(" ")} onClick={props.onMark}>
//         <div className="card-img">
//           <img src={props.scooters.img} alt={props.scooters.name} />
//         </div>
//         <h3 className="head">{props.scooters.name}</h3>
//         <ul className="desc">
//           <li>Остаток заряда: {props.scooters.chargeLevel}%</li>
//           <li>Стоимость в час: ${props.scooters.costPerHour}</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default Workers;
