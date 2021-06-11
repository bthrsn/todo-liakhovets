import React, { useState, FC, ChangeEvent }  from "react";

export const InputBlock: FC<InputBlockProps> = ({addTask}) => {

  const [task, setTask] = useState("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }
  
  const handleClick = () => {
    addTask(task);
    setTask("");
  }

  return (
    <div>
      <input 
        value={task} 
        onChange={handleChange} 
        type="text" 
        placeholder="Add todo task"
      >
      </input>
      <button 
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}

interface InputBlockProps {
  addTask(task: string): void;
}