import "./App.css";
import { useState } from "react";
// import { Planets } from "./planets";

function App() {
  const [count, setCount] = useState(0);
  const [input, changeInput] = useState("");
  const [text, showHide] = useState(true);
  const [textcolor, changeColor] = useState("black");

  const decrement = () => {
    setCount(count - 1);
  };
  const setZero = () => {
    setCount(0);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const handleInputEvent = (event) => {
    changeInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={setZero}>Set Zero</button>
        <button onClick={increment}>Increment</button>
      </div>
      <input type="text" onChange={handleInputEvent} />
      {text && (
        <h1 style={{ color: textcolor }}>
          {input} <br /> Click the button to hide me!!!
        </h1>
      )}
      <button
        onClick={() => {
          showHide(!text);
        }}
      >
        {" "}
        Show / Hide{" "}
      </button>
      <h2 style={{ color: textcolor }}>Change the color</h2>
      <input
        type="color"
        onChange={(event) => changeColor(event.target.value)}
      />
    </div>
  );
}

export default App;

//
// const planets = [
//   { name: "Mars", isGasPlanet: false },
//   { name: "Earth", isGasPlanet: false },
//   { name: "Jupitar", isGasPlanet: true },
//   { name: "Venus", isGasPlanet: false },
//   { name: "Neptune", isGasPlanet: true },
//   { name: "Uranus", isGasPlanet: true },
// ];
// return (
//   <div className="App">
//     {planets.map(
//       (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
//     )}
//   </div>
// );
