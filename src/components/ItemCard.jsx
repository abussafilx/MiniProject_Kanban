import { useState } from "react";
import data from "../data/kanban.json";
import "./ItemCard.css";

function ItemCard() {
  const [tasks, setTasks] = useState(data);

  const deleteTask = (id) => {
    const newList = tasks.filter((e) => {
      return e.id !== id;
    });
    setTasks(newList);
  };

  /////////////////////////////////////////////////////
  const toDoItems = tasks.filter((task) => {
    if (task.status === "To Do") {
      return true;
    }
  });
  const inProgressItems = tasks.filter((task) => {
    if (task.status === "In Progress") {
      return true;
    }
  });
  const doneItems = tasks.filter((task) => {
    if (task.status === "Done") {
      return true;
    }
  });
  // console.log(toDoItems);
  // console.log(inProgressItems);
  // console.log(doneItems);

  const Column = (items) => {
    return items.map((element) => {
      return (
        <div className="card" key={element.id} draggable="true">
          <div>
            <b>Title:</b> {element.title}
          </div>
          <div>
            <b>Description:</b> {element.description}
          </div>
          <div>
            <b>Assignee:</b> {element.assignee}
          </div>
          <div>
            <b>Status:</b> {element.status}
          </div>
          <div>
            <b>Priority:</b> {element.priority}
          </div>
          <div>
            <b>Created Date:</b> {element.createdDate}
          </div>
          <div>
            <b>Due Date:</b> {element.dueDate}
          </div>
          <div>
            {element.priority === "High" && (
              <span className="label">IMPORTANT</span>
            )}
          </div>
          <div>
            <button onClick={() => deleteTask(element.id)}>X</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="kanban-board">
      <div className="col">
        <h3>To Do ({toDoItems.length})</h3>
        <div className="cards-container">{Column(toDoItems)}</div>
      </div>
      <div className="col">
        <h3>In Progress ({inProgressItems.length})</h3>
        <div className="cards-container">{Column(inProgressItems)}</div>
      </div>
      <div className="col">
        <h3>Done ({doneItems.length})</h3>
        <div className="cards-container">{Column(doneItems)}</div>
      </div>
    </div>
  );
}

export default ItemCard;
