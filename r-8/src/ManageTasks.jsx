import AddTasks from "./AddTasks"
import TasksCount from "./TasksCount"
import TasksList from "./TasksList"


function ManageTasks() {
  return (
    <div className="d-flex container justify-content-around mt-5">
        <AddTasks/>
        <TasksList/>
        <TasksCount/>
    </div>
  )
}

export default ManageTasks