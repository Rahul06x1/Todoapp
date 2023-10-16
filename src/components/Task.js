function Task(props) {
    var obj = props.obj
    return(<div className="todo">
              <div className="left">
                <p>{obj.text}</p>
              </div>
            </div>)
  }

export default Task;