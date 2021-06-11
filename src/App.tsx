import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { InputBlock } from "./components/InputBlock";
import { TaskState } from "./redux/reducers/taskReducer";
import { addTask } from "./redux/actions/AddAction";


function App() {

  const tasks = useSelector<TaskState, TaskState["tasks"]>(
    (state) => state.tasks
  );
  
  const dispatch = useDispatch();
  
  const onAddTask = (task: string) => {
    dispatch(addTask(task));
  }
    
  return (
    <>
      <h1>Todo App</h1>
      <InputBlock addTask={ onAddTask }/>
      <div>
        <ul>
          {tasks.map((task, i) => 
            <li>
              <span key={i}>{task}</span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
