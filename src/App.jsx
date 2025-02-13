import "./assets/styles/App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import data from "./data/kanban.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Board from "./pages/Board";
import About from "./pages/About";
import SingleTask from "./pages/SingleTask";
import Error404 from "./pages/Error404";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";

function App() {
  const [tasks, setTasks] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const isHomePage = location.pathname === "/";

  const navigate = useNavigate();

  //function to delete tasks
  const deleteTask = (id) => {
    toast("Task Deleted");
    const newList = tasks.filter((e) => e.id !== id);
    setTasks(newList);
    navigate("/");
  };

  //function to create tasks
  const addTask = (taskDetails) => {
    toast("Task Created");
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((o) => o.id)) + 1 : 1;
    const newTask = {
      ...taskDetails,
      id: newId.toString(),
    };

    const newList = [newTask, ...tasks];
    setTasks(newList);
  };

  const updateTask = (updatedTask) => {
    toast("Task Updated");
    setTasks(
      tasks.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        } else {
          return task;
        }
      })
    );
  };

  const filteredTasks = tasks.filter((task) =>
    Object.values(task)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id="board">
        {isHomePage && <SearchBar onSearch={setSearchQuery} />}
        <Routes>
          <Route
            path="/"
            element={
              <Board
                tasks={filteredTasks}
                setTasks={setTasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
              ></Board>
            }
          />
          <Route path="/about" element={<About></About>} />
          <Route path="/newtask" element={<AddCard addTask={addTask} />} />
          <Route
            path="/item/:id"
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

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <Footer />
    </>
  );
}

export default App;
