import React, {useState, useEffect} from 'react';

function Accordian(){
  const accordionData = {
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  };

  const { title, content } = accordionData;

  const [isActive, setIsActive] = useState(false);

  return(
    <React.Fragment>
    <div>
      <h1>FAQ</h1>
     
      <div className="accordion">
      <div classname="accordian-item">
      <div className="accordion-title">
        <div onClick={()=> (setIsActive(!isActive))}>{title}</div>
        <div classname="moreSym">{isActive ? "-": "+"}</div>
        </div>
     <div>
          {/* {true && 1 && 2} 
           {false && "this is true"}  */}
        {isActive && <div className="accordion-content">{content}</div>}
      </div>

      </div>
      </div>

      </div>
    </React.Fragment>
  );
}
export default Accordian;