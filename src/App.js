import "./style.css";
import { useState } from "react";
import { Text } from "./Text";
// import { Task } from "./Task";
// import { Planets } from "./planets";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;

// ____________ USE STATE _____________
//
//
// Mounting, Updating, UnMounting => This the react component "Life Cycle"
//
// const [todoList, setTodoList] = useState([]);
// const [newTask, setNewTask] = useState("");

// const handleChange = (event) => {
//   setNewTask(event.target.value);
// };

// const addTask = () => {
//   const task = {
//     id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//     taskName: newTask,
//     completed: false,
//   };

//   setTodoList([...todoList, task]);
// };
// const completeTask = (id) => {
//   setTodoList(
//     todoList.map((task) => {
//       if (task.id === id) {
//         return { ...task, completed: true };
//       } else {
//         return task;
//       }
//     })
//   );
// };

// const deleteTask = (id) => {
//   setTodoList(todoList.filter((task) => task.id !== id));
// };
// return (
//   <div className="App">
//     <div className="addTask">
//       <input type="text" onChange={handleChange} />
//       <button onClick={addTask}>Add Task</button>
//     </div>
//     <div className="list">
//       {todoList.map((task) => {
//         return (
//           <Task
//             taskName={task.taskName}
//             id={task.id}
//             completed={task.completed}
//             deleteTask={deleteTask}
//             completeTask={completeTask}
//           />
//         );
//       })}
//     </div>
//   </div>
// );
//
//
//
//
//_______Display Planets____________
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
//
//
//
// ________Basics of use state____________
//   const [count, setCount] = useState(0);
//   const [input, changeInput] = useState("");
//   const [text, showHide] = useState(true);
//   const [textcolor, changeColor] = useState("black");

//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const setZero = () => {
//     setCount(0);
//   };
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const handleInputEvent = (event) => {
//     changeInput(event.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <div>
//         <button onClick={decrement}>Decrement</button>
//         <button onClick={setZero}>Set Zero</button>
//         <button onClick={increment}>Increment</button>
//       </div>
//       <input type="text" onChange={handleInputEvent} />
//       {text && (
//         <h1 style={{ color: textcolor }}>
//           {input} <br /> Click the button to hide me!!!
//         </h1>
//       )}
//       <button
//         onClick={() => {
//           showHide(!text);
//         }}
//       >
//         {" "}
//         Show / Hide{" "}
//       </button>
//       <h2 style={{ color: textcolor }}>Change the color</h2>
//       <input
//         type="color"
//         onChange={(event) => changeColor(event.target.value)}
//       />
//     </div>
//   );
