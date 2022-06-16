import React from "react";
const chars = ["a", "b", "c", "d"];
function ArrayToList() {
  const nums = [5, 6, 7, 8];
  const NList = nums.map((num) => <li key={num.toString()}> {num}</li>);
  const CList = chars.map((char) => <li key={char}> {char}</li>);
  return (
    <div>
      <ol>{NList}</ol>
      <ul>{CList}</ul>
    </div>
  );
}
export default ArrayToList;
