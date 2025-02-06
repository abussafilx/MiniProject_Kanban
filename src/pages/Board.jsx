import "./Board.css";
import ItemCards from "./ItemCards";

function Board(props) {
  
  //Column Structure - Conditional Rendering

  const toDoItems = props.tasks.filter((task) => {
    if (task.status === "To Do") {
      return true;
    }
  });
  const inProgressItems = props.tasks.filter((task) => {
    if (task.status === "In Progress") {
      return true;
    }
  });
  const doneItems = props.tasks.filter((task) => {
    if (task.status === "Done") {
      return true;
    }
  });
 
  const filteredTasks = (items) => {
    return items.map((element) => {
      return (
        
        <ItemCards key={element.id} element={element} tasks={props.tasks} deleteTask={props.deleteTask}></ItemCards>
        
      );
    });
  };

  return (
    <div className="kanban-board">
      <div className="col">
        <h3>To Do ({toDoItems.length})</h3>
        <div className="cards-container">{filteredTasks(toDoItems)}</div>
      </div>
      <div className="col">
        <h3>In Progress ({inProgressItems.length})</h3>
        <div className="cards-container">{filteredTasks(inProgressItems)}</div>
      </div>
      <div className="col">
        <h3>Done ({doneItems.length})</h3>
        <div className="cards-container">{filteredTasks(doneItems)}</div>
      </div>
    </div>
  );
}

export default Board;
