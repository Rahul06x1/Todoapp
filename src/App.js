import React,{useState} from 'react';
import './App.css';
import Active from './components/Active';
import Task from './components/Task';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let today = new Date()
  let day = weekday[today.getDay()];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{if(toDo!==''){setToDos([...toDos,{id:Date.now(),text:toDo,checked:false,active:true}]); setToDo('')}}} className="fas fa-plus"></i>
        <div>
        </div>
      </div>
      <div className='row' >
        <div className="todos">
          <div className="subHeading">
            <br />
            <h2>Active </h2>
          </div>
          {
            toDos.map((obj)=>{
              return(
                <div>
                {obj.active && <Active obj={obj} toDos={toDos} setToDos={setToDos}/>}
              </div>
              )
              
          })
          }
        </div>
        <div className="todos">
          <div className="subHeading">
            <br />
            <h2>Completed </h2>
          </div>
          {
            toDos.map((obj)=>{
              return(
                <div>
                {obj.checked && !obj.active && <Task obj={obj}/>}
              </div>
              )
              
          })
          }
        </div>
        <div className="todos">
          <div className="subHeading">
            <br />
            <h2>Cancelled </h2>
          </div>
          {
            toDos.map((obj)=>{
              return(
                <div>
                {!obj.checked && !obj.active && <Task obj={obj}/>}
              </div>
              )
              
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;