const TodoForm = ({todoTask,submitHandle,setTodoTask}) => {
  return (
    <form onSubmit={submitHandle} className="flex justify-center">
        <input 
          type="text" 
          name="todoInput" 
          value={todoTask} 
          onChange={(e) => setTodoTask(e.target.value)}
          placeholder="Create a new todo..."
        />
        <button type="hidden"></button>
    </form>
  )
}

export default TodoForm
