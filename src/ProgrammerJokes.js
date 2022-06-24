import jokes from "./Resources/jokes.json";
import "./ProgrammerJokes.css";
function ProgrammerJokes() {
  const pJokes = jokes.map((joke) => {
    return (
      <div className="jokesCard" key={joke.id}>
        <h1>{joke.setup}</h1>
        <p>{joke.punchline}</p>
      </div>
    );
  });
  return (
    <div>
      {/* <button onClick={()=>console.log({pJokes})}>fetch jokes</button> */}
      <div className="jokesDisplay">{pJokes}</div>
    </div>
  );
}
export default ProgrammerJokes;
