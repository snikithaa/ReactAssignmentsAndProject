import { useContext } from "react"
import { taskContextObj } from "./TaskContext"

function TasksCount() {
  const {tasks}=useContext(taskContextObj)
  return (
    <div className="text-center">
      <p className="text-secondary lead display-6">Tasks Count</p>
      <p className="lead fs-3">{tasks.length}</p>
    </div>
  )
}

export default TasksCount