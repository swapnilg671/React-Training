import React, { Children } from "react";
import ReactDom from "react-dom";

function Button({ onClick, children, type, name, color, size }) {
  return (
    <div>
      {/* <button className={`custom-button ${color} ${size} ${type}`}
      onClick={onClick} name={name}> {children}
      </button> */}
      <button onClick={onClick} name={name}>
        {children}
      </button>
    </div>
  );
}
export default Button;
