import { Link, useNavigate } from "react-router-dom";

function ItemCards(props) {
  const navigate = useNavigate(); // Para navegação
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
  }

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
        <b>Title:</b> {props.element.title}
      </div>
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
      <div>
        <b>Due Date:</b> {props.element.dueDate}
      </div>

      <div className="btn-container">
        <div>{advanceButton()}</div>
        <Link to={`/item/${props.element.id}`}>
          <button className="info-btn">More Info</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCards;
