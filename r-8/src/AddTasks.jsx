import { useForm } from "react-hook-form"
import { useContext } from "react";
import { taskContextObj } from "./TaskContext";
function AddTasks() {
    const {register,handleSubmit,reset}=useForm();
    const {setTasks,tasks}=useContext(taskContextObj)
    function handleFormSubmit(taskObj){
        setTasks([...tasks,taskObj])
        reset()
    }
    console.log(tasks)
  return (
    <div>
        <p className="text-secondary lead display-6">Add Tasks</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input type="text" {...register('tasks')} id="tasks" className="form-control w-100 mt-5 bg-light" />
            <button type="submit" className="btn btn-secondary mt-4">Add Task</button>
        </form>
    </div>
  )
}

export default AddTasks