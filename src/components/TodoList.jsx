import crossIcon from "../assets/images/icon-cross.png";
const TodoList = ({taskArray ,deleteTask,checkComplete,clearComplete,filterComplete}) => {
  return (
    <section>
        <ul>
            {taskArray.map((task)=>{
                return (
                    <li key={task.id} >
                        <div className="flex justify-between li">
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="check"
                                    checked={task.complete}
                                    onChange={()=>{checkComplete(task.id)}} 
                                />
                                <span className={task.complete? "span":""}>{task.todoTask}</span>
                            </div>
                            <img onClick={()=> deleteTask(task.id)} src={crossIcon} alt="" />
                        </div>
                        <hr />
                    </li>
                )
            })}
            <div className="option flex justify-between">
                {taskArray.length === 0 ? "no item left" :
                    <h3>{taskArray.length} item left</h3>
                }
                <h3 onClick={clearComplete}>Clear Completed</h3>
            </div>        
        </ul>
        <div className="flex filter justify-center ">
            <h3>All</h3>
            <h3>Active</h3>
            <h3 onClick={filterComplete}>Completed</h3>
        </div>
    </section>
  )
}

export default TodoList
