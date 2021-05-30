import React, { useState } from "react";

function Comp1(props) {
  const [counter, setCounter] = useState(0);
  const handlerClick = (event) => {
    setCounter(counter + 1);
  };

  const handlerMouseEnter = (event) => {
    console.log("handlerMouseEnter");
  };
  const handlerMouseLeave = (event) => {
    console.log("handlerMouseLeave");
  };
  return (
    <button
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      Нажали кнопку {counter} раз
    </button>
  );
}
export default Comp1;
