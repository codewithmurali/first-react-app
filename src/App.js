// import { Form } from "./Components/Form";
import "./style.css";
// import { useState } from "react";
// import Axios from "axios";
// import { Text } from "./Text";
// import { Task } from "./Task";
// import { Planets } from "./planets";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contact";
// import { Navbar } from "./Navbar";
// import { Profile } from "./pages/Profile";
import { useState } from "react";
// import { createContext } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// export const AppContext = createContext();

function App() {
  // const [username, setUsername] = useState("Murali");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;

// _______________ Forms __________________

{
  /* <Form /> */
}

// _____________ React Query _______________

// const client = new QueryClient({
//   defaultOptions: { queries: { refetchOnWindowFocus: true } },
// });

// <QueryClientProvider client={client}>
// {/* <AppContext.Provider value={{ username, setUsername }}> */}

// <Router>
//   <Navbar />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     {/* <Route path="/profile" element={<Profile />} /> */}
//     <Route path="/contact" element={<Contact />} />
//     <Route path="*" element={<h1>Page not found</h1>} />
//   </Routes>
// </Router>
// {/* </AppContext.Provider> */}
// </QueryClientProvider>

// _____________ Fetch api data using Axios -> 2 _______________

// const [name, setName] = useState("");
// const [predictedAge, setPredictedAge] = useState(0);

// const fetchData = () => {
//   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//     setPredictedAge(res.data.age);
//   });
// };

// return (
//   <div className="App">
//     <input
//       type="text"
//       placeholder="Name..."
//       onChange={(event) => {
//         setName(event.target.value);
//       }}
//     />
//     <button onClick={fetchData}>Predict Age</button>

//     <h1>Name: {predictedAge?.name}</h1>
//     <h1>Predicted Age: {predictedAge?.age} </h1>
//     <h1>Count: {predictedAge?.count}</h1>
//   </div>
// );

// _____________ Fetch api data using Axios -> 1 _______________

// const [catFact, setCatFact] = useState("");

// const fetchCatFact = () => {
//   Axios.get("http://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//   });
// };

// useEffect(() => {
//   fetchCatFact();
// }, []);
// return (
//   <div className="App">
//     <button onClick={fetchCatFact}>Generate Cat Fact</button>
//     {catFact}
//   </div>
// );

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
