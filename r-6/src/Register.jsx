import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const [err,seterror]=useState(null)
  const navigate=useNavigate();
  function handleFormSubmit(newUser){
    fetch('http://localhost:3000/users',
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
      }
      )
      .then(res=>{
        if(res.status===201){
          navigate("/login")
        }
        else{
          seterror({message:"failed to fetch"})
        }
    })
      .catch(err=>seterror(err))
  }
  return (
    <div className="">
      {
        err!==null && <p className="display-3 text-danger text-center ">{err.message}</p>
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
        <div className="form-group mt-2">
          <label htmlFor="username" className="form-label">Email</label>
          <input type="email" {...register('email')} id="email" className="form-control" />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="dob" className="form-label">DOB</label>
          <input type="date" {...register('dob')} id="dob" className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary p-2 mt-4">Register</button>
      </form>
    </div>
  )
}

export default Register