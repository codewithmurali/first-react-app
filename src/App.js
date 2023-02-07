import "./App.css";
// import { useState } from "react";
// import { Planets } from "./planets";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupitar", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
}

export default App;
