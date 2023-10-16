function Active(props) {
    var setToDos = props.setToDos
    var toDos = props.toDos
    var obj = props.obj
    return(<div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if (obj2.id===obj.id){
                      obj2.checked = e.target.checked
                    }
                    return obj2
                  }))
                }} value={obj.checked} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{
                  // setToDos(toDos.filter((obj3)=> obj3.id !== obj.id))
                  setToDos(toDos.filter(obj3=>{
                    if (obj3.id===obj.id){
                      obj3.active = false
                    }
                    return obj3
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>)
  }

export default Active;