import "./App.css";
import Button from "./components/Button";
import Counter from "./Counter";

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
      <Counter />
    </div>
  );
}
