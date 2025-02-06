import "./assets/styles/App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import data from "./data/kanban.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Board from "./pages/Board";
import About from "./pages/About";
import SingleTask from "./pages/SingleTask";
import Error404 from "./pages/Error404";


function App() {

  const [tasks, setTasks] = useState(data);

  const deleteTask = (id) => {
    const newList = tasks.filter((e) => {
      return e.id !== id;
    });
    setTasks(newList);
  };


  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id="board">
        <Routes>
          <Route path="/" element={<Board tasks={tasks} deleteTask={deleteTask}></Board>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/item/?task" element={<SingleTask tasks={tasks}></SingleTask>}/>
          <Route path="/error404" element={<Error404></Error404>}/>

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
