import jokes from "./Resources/jokes.json";
import "./ProgrammerJokes.css";
function ProgrammerJokes() {
  const pJokes = jokes.map((joke) => {
    return (
      <div className="jokesCard" key={joke.id}>
        <h1>{joke.setup}</h1>
        <div>{joke.punchline}</div>
      </div>
    );
  });
  return (
    <div>
      {/* <button onClick={()=>console.log({pJokes})}>fetch jokes</button> */}
      <div>{pJokes}</div>
    </div>
  );
}
export default ProgrammerJokes;
