import "./assets/styles/App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import data from "./data/kanban.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Board from "./pages/Board";
import About from "./pages/About";
import SingleTask from "./pages/SingleTask";
import Error404 from "./pages/Error404";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";

function App() {
  const [tasks, setTasks] = useState(data);

  const navigate = useNavigate();

  //function to delete tasks
  const deleteTask = (id) => {
    const newList = tasks.filter((e) => {
      return e.id !== id;
    });
    setTasks(newList);
    navigate("/");
  };

  //function to create tasks
  const addTask = (taskDetails) => {
    const newId = Math.max(...tasks.map((o) => o.id)) + 1;
    const newTask = {
      ...taskDetails,
      id: newId.toString(),
    };

    const newList = [newTask, ...tasks];
    setTasks(newList);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === updatedTask.id) {
          console.log(task);
          console.log(updatedTask);
          return updatedTask;
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id="board">
        <Routes>
          <Route
            path="/"
            element={
              <Board
                tasks={tasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
              ></Board>
            }
          />
          <Route path="/about" element={<About></About>} />
          <Route path="/newtask" element={<AddCard addTask={addTask} />} />
          <Route
            path="/item/:task"
            element={
              <SingleTask tasks={tasks} deleteTask={deleteTask}></SingleTask>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditCard tasks={tasks} updateTask={updateTask}></EditCard>
            }
          />
          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
