import "./App.css";
import { useState } from "react";
// import { Planets } from "./planets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to zero</button>
      <br />
      <label>{count}</label>
    </div>
  );
}

export default App;

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
