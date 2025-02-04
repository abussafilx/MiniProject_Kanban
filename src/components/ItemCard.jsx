function ItemCard(props) {
    return (

        props.list.map((element) => {

            return (
                <div className="card" key={element.id}>
                    <div><b>Title:</b> {element.title}</div>
                    <div><b>Description:</b>  {element.description}</div>
                    <div><b>Assignee:</b>  {element.assignee}</div>
                    <div><b>Status:</b>  {element.status}</div>
                    <div><b>Priority:</b>  {element.priority}</div>
                    <div><b>Created Date:</b>  {element.createdDate}</div>
                    <div><b>Due Date:</b>  {element.dueDate}</div>
                </div>
            );

        })

    );

}

export default ItemCard

