import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ItemCards(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const statusColorsBorder = {
    "To Do": "#FF6B6B",
    "In Progress": "#4D90FE",
    Done: "#66BB6A",
  };

  const advanceButton = function () {
    if (props.element.status === "To Do") {
      return <button className="start-btn" onClick={handleStart}>Start</button>
    } else if (props.element.status === "In Progress") {
      return <button className="done-btn" onClick={handleFinish}>Complete</button>
    }
  };

  const handleStart = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...props.element,
      status: "In Progress"
    };

    props.updateTask(updatedTask);

    navigate("/");
  };

  const handleFinish = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...props.element,
      status: "Done"
    };

    props.updateTask(updatedTask);

    navigate("/");
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); 
  };

  return (
    <div
      className="card"
      key={props.element.id}
      draggable="true"
      style={{ borderColor: `${statusColorsBorder[props.element?.status]}` }}
    >
      <div className="btn-container">
        <div>
          {props.element.priority === "High" && (
            <span className="label">IMPORTANT</span>
          )}
        </div>
        <div>
          <Link to={`/edit/${props.element.id}`}>
            <button className="delete-btn second-btn">&#9998;</button>
          </Link>
          <button
            className="delete-btn"
            onClick={() => props.deleteTask(props.element.id)}
          >
            X
          </button>
        </div>
      </div>
      <div>
            <h4>{props.element.title}</h4> 
          </div>
          <div className="due">
            Due Date: {props.element.dueDate}
          </div>

      {/* Conteúdo que pode ser colapsado */}
      {!isCollapsed && (
        <>

          <div>
            <b>Description:</b> {props.element.description}
          </div>
          <div>
            <b>Assignee:</b> {props.element.assignee}
          </div>
          <div>
            <b>Status:</b> {props.element.status}
          </div>
          <div>
            <b>Priority:</b> {props.element.priority}
          </div>
          <div>
            <b>Created Date:</b> {props.element.createdDate}
          </div>

        </>
      )}

      <div className="btn-container">
        <div>{advanceButton()}</div>
        <div><button className="info-btn" onClick={toggleCollapse}>
        {isCollapsed ? "Show Details" : "Hide Details"}</button></div>      
          </div>
    </div>
  );
}

export default ItemCards;
