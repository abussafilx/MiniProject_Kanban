import "../assets/styles/Board.css";
import ItemCards from "../components/ItemCards";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Board(props) {
  //Column Structure - Conditional Rendering
  const [dragging, setDragging] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  const [todoItems, setTodoItems] = useState([])
  const [inProgressItems, setInProgressItems] = useState([])
  const [doneItems, setDoneItems] = useState([])





  const handleDrop = (e) => {
    e.preventDefault()
    console.log("parent node status", e.target.parentNode.parentNode.id)
    console.log("currentIds", currentId)

    if (e.target.parentNode.parentNode.id === "To Do" || e.target.parentNode.parentNode.id === "Done" || e.target.parentNode.parentNode.id === "In Progress") {
      props.setTasks(prev => prev.map(task => task.id === currentId ? { ...task, status: e.target.parentNode.parentNode.id } : task));
      toast("Task Updated");
    }


    setDragging(false)
  }
  const handleDragOver = (e) => {
    e.preventDefault()


  }
  const handleDragLeave = (e) => {
    e.preventDefault()

  }


  const handleDragEnter = (e) => {
    e.preventDefault()
    setDragging(true)
  }
  // Filter tasks for each column
  useEffect(() => {
    const sortByDueDate = (a, b) => new Date(a.dueDate) - new Date(b.dueDate);

    setTodoItems(
      props.tasks.filter((task) => task.status === "To Do").sort(sortByDueDate)
    );
    setInProgressItems(
      props.tasks
        .filter((task) => task.status === "In Progress")
        .sort(sortByDueDate)
    );
    setDoneItems(
      props.tasks.filter((task) => task.status === "Done").sort(sortByDueDate)
    );
  }, [props.tasks]);


  //columns

  return (
    <div className="kanban-board">
      <div id="To Do" className="col" onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
        <h3>To Do ({todoItems.length}) {dragging && <p className="drop-area">drop here</p>}</h3>
        <div className="cards-container">{todoItems.map(element => <ItemCards

          key={element.id}
          setCurrentId={setCurrentId}
          element={element}
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />)}</div>
      </div>
      <div id="In Progress" className="col" onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
        <h3 >In Progress ({inProgressItems.length}) {dragging && <p className="drop-area">drop here</p>}</h3>
        <div className="cards-container">{inProgressItems.map(element => <ItemCards

          key={element.id}
          setCurrentId={setCurrentId}
          element={element}
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />)}</div>
      </div>
      <div id="Done" className="col" onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
        <h3 >Done ({doneItems.length}) {dragging && <p className="drop-area">drop here</p>}</h3>
        <div className="cards-container">{doneItems.map(element => <ItemCards

          key={element.id}
          setCurrentId={setCurrentId}
          element={element}
          tasks={props.tasks}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />)}</div>
      </div>
    </div>
  );
}

export default Board;
