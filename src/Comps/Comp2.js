import { useState } from "react";
import React from "react";

function Comp2() {
  const [count, setcount] = useState(0);
  const [comment, setcomment] = useState([]);

  let myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setcount(currentCount);
  };

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setcomment(comments);
    myRef.current.value = "";
  };

  return (
    <div>
      <h1>State</h1>
      <div>
        <button onClick={handler}>Изменение state</button>
      </div>
      <div>{count % 2 === 0 ? "even" : "odd"}</div>
      <div>{count} раз</div>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Add comment</button>
      </div>
      <div>
        <ul>
          {comment.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Comp2;
