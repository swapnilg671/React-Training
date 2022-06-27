import React, { useState } from "react";
import "./Accordian.css";

function Accordian(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <div>
        <h1>{props.name}</h1>

        <div className="accordion">
          <div classname="accordian-item">
            <div className="accordion-title">
              <div onClick={() => setIsActive(!isActive)}>
                {props.title}
                <div className="moreSym">{isActive ? "-" : "+"}</div>
              </div>
            </div>
            <div>
              {/* {true && 1 && 2} 
           {false && "this is true"}  */}
              {isActive && (
                <div className="accordion-content">{props.content}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Accordian;
