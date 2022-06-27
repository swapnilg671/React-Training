import React from "react";
import "./App.css";
import ArrayToList from "./ArrayToList";
import Button from "./components/Button";
import Counter from "./Counter";
import UForm from "./userForm";
import IList from "./components/IList";
import Data1 from "./Resources/Data1";
import Data2 from "./Resources/Data2";
import Users from "./Resources/Users.json";
import ProgrammerJokes from "./ProgrammerJokes";
import RandomRobo from "./RandomRobo";
import SearchRobo2 from "./SearchRobo2";
import Accordian from "../src/components/Accordian";

import AccordionData from "./Resources/AccordianData";

import Slider from "./components/Slider";

function App() {
  const showAlert = () => {
    alert("You have clicked button");
  };

  const showAlert_m = (num) => {
    alert(`you have clicked + ${num} `);
  };
  return (
    <div className="App">
      <div>
        <Slider />
      </div>
      <h1>Hello React</h1>
      <h1>Hello World!</h1>
      <div>
        <Accordian name="FAQ" />
        {AccordionData.map((adata) => (
          <div>
            <Accordian title={adata.title} content={adata.content} />
          </div>
        ))}

        {/*      
       <Accordian name="FAQ App" title={AccordianData.map((adata)=>return( {adata.title})) }   content="" />*/}
      </div>

      <SearchRobo2 />

      <button className="button-1" onClick={showAlert}>
        {" "}
        Alert{" "}
      </button>
      <div className="cButton">
        <Button onClick={() => showAlert_m("button-1")} name="button-1">
          {"button-1"}
        </Button>
        <Button onClick={showAlert_m}>button-2</Button>
        <Button onClick={showAlert_m} name="button-3">
          {"button-3 "}
        </Button>
        <br />
      </div>

      <Counter />

      <div className="ArrayToList">
        <h1> Array To List in React</h1>
        <ArrayToList />
      </div>
      <hr />
      <div className="custom-list">
        <h1> List of Animals</h1>
        <button onClick={() => console.log(Data1[1].size)}>Test</button>
        <IList title="wild Animals" name={Users.firstName} size={Data1.size}>
          {"list 1- "}
        </IList>
        <br />
        <IList title="pet animals" name={Data2.name} size={Data2.size}>
          {"list 2-"}
        </IList>
      </div>

      <div className="userForm">
        <UForm />
      </div>
      <hr />
      <div>
        <ProgrammerJokes />
      </div>
      <div>
        <RandomRobo />
      </div>
    </div>
  );
}
export default App;
