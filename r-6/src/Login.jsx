import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [error,seterror]=useState(null)
    const navigate=useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm()
    function handleFormSubmit(users){
      fetch(`http://localhost:3000/users?username=${users.username}&password=${users.password}`)
      .then(res=>res.json())
      .then(usersList=>
        {
          if(usersList.length===1){
            navigate(`/userProfile/${usersList[0].username}`,{state:usersList[0]})
            console.log(state)
          }
          else{
            seterror({message:"invalid username or password"})
          }
        }
        )
      .catch(err=>seterror(err))
    }
  return (
    <div>
      {
        error!==null && <p className="display-3 text-center text-danger">{error.message}</p>
      }
      <form className="w-25 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group mt-2">
          <label htmlFor="username" className="form-label">User Name</label>
          <input type="text" {...register('username',{required:true})} id="username" className="form-control" />
        </div>
        {
          errors.username?.type==="required" && <p className="text-warning">*Username is required</p>
        }
        <div className="form-group mt-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" {...register('password')} id="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary p-2 mt-4">Login</button>
      </form>
    </div>
  )
}

export default Login