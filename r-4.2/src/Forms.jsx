import { useForm } from "react-hook-form";
import { useState } from "react";
function Forms() {
  const {register,handleSubmit,reset}=useForm();
  const [user,setuser]=useState([]);
  function handleFormSubmit(obj){
    setuser([...user,obj]);
    reset();
  }
  return (
    <div>
        <p className="display-3 text-secondary mt-5 text-center">User Registration</p>
        <form className="w-25 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group mt-3">
                <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" {...register('username')} id="usernname" className="form-control mt-2" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="dob" className="form-label">Date Of Birth</label>
                <input type="date" {...register('dob')} id="dob" className="form-control mt-2" />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" {...register('city')} id="city" className="form-control mt-2" />
            </div>
            <button type="submit" className="btn btn-secondary p-2 mt-4">Register</button>
        </form>
        <div className="mt-5">
        <table className="mx-auto table w-50">
            <thead>
                <tr>
                    <th className="col"></th>
                    <th className="col">S.no</th>
                    <th className="col">User Name</th>
                    <th  className="col">DOB</th>
                    <th className="col">City</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((userData,index)=>(
                        <tr key={index} className="">
                            <th className="row"></th>
                            <td>{index+1}</td>
                            <td>{userData.username}</td>
                            <td>{userData.dob}</td>
                            <td>{userData.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Forms