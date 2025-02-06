function ItemCards (props){
    const statusColorsBorder = {
        "To Do": "#FF6B6B",
        "In Progress": "#4D90FE",
        "Done": "#66BB6A",
      };

    return (
    <div
          className="card"
          key={props.element.id}
          draggable="true"
          style={{ borderColor: `${statusColorsBorder[props.element.status]}` }}
        >
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
          <div>
            {props.element.priority === "High" && (
              <span className="label">IMPORTANT</span>
            )}
          </div>
          <div>
            <button onClick={() => props.deleteTask(props.element.id)}>X</button>
          </div>
        </div>
    )
}

export default ItemCards