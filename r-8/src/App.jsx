import ManageTasks from "./ManageTasks"
import TaskContext from "./TaskContext"


function App() {
  return (
    <TaskContext>
      <ManageTasks/>
    </TaskContext>
    
  )
}

export default App