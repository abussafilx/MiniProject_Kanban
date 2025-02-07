import { useState } from "react"
import "../assets/styles/App.css";
import { useNavigate } from "react-router-dom";

function AddCard(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [assignee, setAssignee] = useState("")
    const [priority, setPriority] = useState("Low")
    const [dueDate, setDueDate] = useState("")

    const today = new Date().toISOString().split("T")[0];

    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            title: title,
            description: description,
            assignee: assignee,
            priority: priority,
            createdDate: today,
            dueDate: dueDate,
            status: "To Do",
        };

        props.addTask(taskObj)

        setTitle("");
        setDescription("");
        setAssignee("");
        setPriority("Low");
        setDueDate("");

        navigate("/")

    }

    return (
        <div>
            <h2 className="section-title">Add new task</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Title: </span>
                        <input
                            type="text"
                            name="title"
                            required={true}
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
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
                            required={true}
                            placeholder="Enter assignee"
                            value={assignee}
                            onChange={(e) => { setAssignee(e.target.value) }}
                        />
                    </label>
                    <label>
                        <span>Priority: </span>
                        <select name="priority" value={priority} onChange={(e) => { setPriority(e.target.value) }} >
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
                            required={true}
                            value={dueDate}
                            onChange={(e) => { setDueDate(e.target.value) }}
                        />
                    </label>


                    <button type="submit">Submit</button>


                </form>
            </section>

        </div>
    )

}

export default AddCard