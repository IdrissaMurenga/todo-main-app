import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

import { useState } from "react"

const TodoMain = () => {
  const [todoTask,setTodoTask] = useState("");
  const [taskArrary,setTaskAarry] = useState([]);


  const addTask = () =>{
    const id = Date.now()
    const taskes = {id,todoTask,complete:false}
    setTaskAarry([...taskArrary,taskes])
    setTodoTask("")
  }
  const submitHandle = (e) =>{
    e.preventDefault();
    addTask()
  }
  const deleteTask = (id) =>{
    const newArrayTask = taskArrary.filter((task)=> task.id !== id)
    setTaskAarry(newArrayTask)
  }
  const checkComplete = (id) =>{
    const completeTask = taskArrary.map((task)=>{
      if(task.id === id){
        return({...task,complete:true})
      }return task;
    })
    setTaskAarry(completeTask)
  }
  const clearComplete = () =>{
    const clearTask = taskArrary.filter((task)=> task.complete !== true)
    setTaskAarry(clearTask)
  }
  const filterComplete = () =>{
    const filterTask = taskArrary.filter((task)=>task.complete === true)
    setTaskAarry(filterTask)
  }
  return (
    <main>
        <TodoForm 
          todoTask={todoTask} 
          setTodoTask={setTodoTask} 
          submitHandle={submitHandle} 
        />
        <TodoList 
          taskArray={taskArrary} 
          deleteTask={deleteTask} 
          checkComplete={checkComplete} 
          clearComplete={clearComplete} 
          filterComplete={filterComplete}
        />
    </main>
  )
}

export default TodoMain
