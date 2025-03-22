import { useContext } from "react"
import { taskContextObj } from "./TaskContext"
function TasksList() {
  const {tasks}=useContext(taskContextObj)
  return (
    <div className="text-center">
      <p className="text-secondary lead display-6">Tasks List</p>
    {
      tasks.map(({tasks},index)=>(
        <p className="lead text-dark fs-3" key={index} >{tasks}</p>
      ))
    }
    </div>
  )
}

export default TasksList