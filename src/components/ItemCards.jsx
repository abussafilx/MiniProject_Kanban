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

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


const  handleDragStart = ( e) => {
   props.setCurrentId(e.target.id)
  }
  const handleDrop = (e) => {
    e.preventDefault()
   
  }
  const handleDragOver = (e) => {
    e.preventDefault()
 
  } 
  const handleDragLeave = (e) => {
    e.preventDefault()
   
  }


 return (
    <div
      className="card"
      key={props.element.id}
      id={props.element.id}
      draggable="true"
      onDragStart={handleDragStart}
      onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} 
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

      {!isCollapsed && (
        <>

          <div>
            Description:<br /> <span className="info">{props.element.description}</span>
          </div>
          <div>
            Assignee:<br /> <span className="info">{props.element.assignee}</span>
          </div>
          <div>
            Status:<br /> <span className="info">{props.element.status}</span>
          </div>
          <div>
            <b>Priority:</b><br /> <span className="info">{props.element.priority}</span>
          </div>
          <div>
            <b>Created Date:</b><br /> <span className="info">{props.element.createdDate}</span>
          </div>

        </>
      )}

      <div className="btn-container-bottom">
       
        <div><button className="info-btn" onClick={toggleCollapse}>
          {isCollapsed ? "Show Details" : "Hide Details"}</button></div>
      </div>
    </div>
  );
}

export default ItemCards;
