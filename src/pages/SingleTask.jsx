import { Link, useParams } from "react-router-dom"


function SingleTask(props) {
    

    
    const taskId  = useParams();
    
    
    
    const taskObj = props.tasks.find((Obj) => {
        if (Obj.id === taskId.task) {
            return true
        } else {
            return false
        }
    });

    console.log(taskObj)
    
    
    const statusColorsBorder = {
        "To Do": "#FF6B6B",
        "In Progress": "#4D90FE",
        "Done": "#66BB6A",
    };
    
    
    return (
        <div
            className="card"
            key={taskObj.id}
            draggable="true"
            style={{ borderColor: `${statusColorsBorder[taskObj.status]}` }}
        >
            <div>
                <b>Title:</b> {taskObj.title}
            </div>
            <div>
                <b>Description:</b> {taskObj.description}
            </div>
            <div>
                <b>Assignee:</b> {taskObj.assignee}
            </div>
            {/* <div>
                <b>Status:</b> {taskObj.status}
            </div> */}
            <div>
                <b>Priority:</b> {taskObj.priority}
            </div>
            <div>
                <b>Created Date:</b> {taskObj.createdDate}
            </div>
            <div>
                <b>Due Date:</b> {taskObj.dueDate}
            </div>
            
            <div>
                <button className="delete-btn" onClick={() => taskObj.deleteTask(taskObj.element.id)}>X</button>
            </div>
            <div className="btn-container"> 
            <div>
                {taskObj.priority === "High" && (
                    <span className="label">IMPORTANT</span>
                )}
            </div>
            <Link to={`/`}>
            <button className="info-btn">Back</button>
            </Link>
          </div>
        </div>
    )

}

export default SingleTask