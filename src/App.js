import { useState } from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import {addTask,deleteTask,doneTask} from "./JS/ACTIONS/ActionTask";


function App() {
  const [text, settext] = useState();
  const dispatch= useDispatch();

  const todoliste=useSelector((state)=> state.todolist)
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 style={{ textalign:'center',color:'#f1faee' }} >Todo List</h1>
          

        </div>
        <div className='container'>
         
<div className='inputt'>
  <InputGroup className="mb-3" style={{width:'50%'}}>
    <FormControl
      placeholder="Add Task"
      aria-label="Add Task"
      aria-describedby="basic-addon2"
      type="text" placeholder='new task' onChange={(e)=>settext(e.target.value)}  />
    <Button variant="outline-secondary" id="button-addon2" onClick={()=>dispatch(addTask({ id: Math.random(), text:text, isDone:false}))} >
      Add
    </Button>
  </InputGroup>
  </div>


         {todoliste.map(el=> <div>
        <h1 onClick={()=>dispatch(doneTask(el.id))} className={el.isDone? "green" :"red"}> {el.text} </h1>
        <p> {el.isDone?"Done":"NotDone"} </p>
        
        <Button variant="outline-danger" onClick={()=>dispatch(deleteTask(el.id))}>Delete</Button>{' '}
      </div> )}

        </div>
      

      </header>
    </div>
  );
}

export default App;
