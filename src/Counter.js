import React, { useState } from "react";

function Counter() {
  const [counting, setCounting] = useState(1);
  const add = () => {
    setCounting(counting + 1);
  };
  const sub = () => {
    setCounting(counting - 1);
  };

  return (
    <div>
      <h1>Counter in ReactJs</h1>
      <h1>{counting}</h1>
      <button onClick={add}> add 1 </button>
      <button onClick={sub}> subtract 1 </button>
    </div>
  );
}
export default Counter;
