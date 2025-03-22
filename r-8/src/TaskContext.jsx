import { createContext,useState } from "react"
export const taskContextObj=createContext();
function TaskContext({children}) {
  const [tasks,setTasks]=useState([]);
  return (
    <div>
      <taskContextObj.Provider value={{tasks,setTasks}}>
        {children}
      </taskContextObj.Provider>
    </div>
  )
}

export default TaskContext