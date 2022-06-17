import "./App.css";
import ArrayToList from "./ArrayToList";
import Button from "./components/Button";
import Counter from "./Counter";
import IList from "./components/IList";
import Data1 from "./Resources/Data1";
import Data2 from "./Resources/Data2";
import Users from "./Resources/Users.json";
import userForm from "./userForm";

export default function App() {
  const showAlert = () => {
    alert("You have clicked button");
  };

  const showAlert_m = (props) => {
    alert("you have clicked" + JSON.stringify(props.children));
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>Hello World!</h2>
      <button className="button-1" onClick={showAlert}>
        {" "}
        Alert{" "}
      </button>
      <div className="cButton">
        <Button onClick={showAlert_m} name="button-1">
          {" "}
          button-1
        </Button>
        <Button onClick={showAlert_m}>button-2</Button>
        <Button onClick={showAlert_m} name="button-3">
          {" "}
          button-3
        </Button>
        <br />
      </div>

      <Counter />
      <div className="uForm">
        <userForm />
      </div>
      <div className="ArrayToList">
        <h1> Array To List in React</h1>
        <ArrayToList />
      </div>
      <hr />
      <div className="custom-list">
        <h1> List of Animals</h1>
        <button onClick={() => console.log(Data1.size)}>Test</button>
        <IList title="wild Animals" name={Users.firstName} size={Data1.size}>
          {"1- "}
        </IList>
        <br />
        <IList title="pet animals" name={Data2.name} size={Data2.size}>
          {"2-"}
        </IList>
      </div>
    </div>
  );
}
