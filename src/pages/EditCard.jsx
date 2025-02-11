import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/styles/EditCard.css";

function EditCard(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  useEffect(() => {
    const task = props.tasks.find((task) => task.id === id);

    setTitle(task.title);
    setDescription(task.description);
    setAssignee(task.assignee);
    setPriority(task.priority);
    setDueDate(task.dueDate);
    setStatus(task.status);
    setCreatedDate(task.createdDate);
  }, [id, props.tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id,
      title,
      description,
      assignee,
      priority,
      dueDate,
      status,
      createdDate,
    };

    props.updateTask(updatedTask);
    navigate("/");
  };

  return (
    <section id="editTask">
      <form onSubmit={handleSubmit}>
        <h2 className="section-title">Edit Task</h2>
        <label>
          <span>Title: </span>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Description: </span>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span>Assignee: </span>
          <input
            type="text"
            name="assignee"
            placeholder="Enter assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </label>
        <label>
          <span>Priority: </span>
          <select
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          <span>Due Date: </span>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <button type="submit">Update Task</button>
        <Link className="edit-back-btn" to={`/`}>
          Back
        </Link>
      </form>
    </section>
  );
}

export default EditCard;
