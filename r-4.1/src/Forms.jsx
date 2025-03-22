import { useForm } from "react-hook-form"
import './Forms.css'
import UsersList from "./usersList";
import { useState } from "react";
function Forms() {
const {register,handleSubmit,formState:{errors}}=useForm();
const [data,setdata]=useState()
console.log({errors})
function handleFormsubmit(obj){
  setdata(obj)
}
console.log(data)
  return (
    <div>
    
        <form className="w-50 mx-auto text-secondary p-4 my-5 rounded" onSubmit={handleSubmit(handleFormsubmit)}>
            <div className="content ms-5 ">
            <p className="lead">Registration Form</p>
            {/* first */}
            <div className=" w-75 mt-5 row">
              {/* first name */}
            <div className="form-group w-50 me-4 col">
              <label htmlFor="firstName" className="form-label ">First Name</label>
              <input type="text" {...register('firstName',{required:true,minLength:4,maxLength:6})} id="firstName" className="form-control p-2 " />
              {errors.firstName?.type==="required" && <p className="text-danger">*first name is required</p>}
              {errors.firstName?.type==="minLength" && <p className="text-danger">*minimum length is 4</p>}
              {errors.firstName?.type==="maxLength" && <p className="text-danger">*maximum length is 6</p>}
            </div>
      
            {/* second name */}
            <div className="form-group w-50 col">
              <label htmlFor="secondName" className="form-label">Second Name</label>
              <input type="text" {...register('secondName',{required:true,minLength:4,maxLength:6})} id="secondName" className="form-control p-2" />
              {errors.secondName?.type==="required" && <p className="text-danger">*second name is required</p>}
              {errors.secondName?.type==="minLength" && <p className="text-danger">*minimum length is 4</p>}
              {errors.secondName?.type==="maxLength" && <p className="text-danger">*maximum length is 6</p>}
            </div>
            </div>
            {/* second */}
            <div className="mt-3 w-75 row">
              {/* Birthday */}
              <div className="col birthday me-4">
              <label htmlFor="birthday" className="form-label">Birthday</label>
              <input type="date" {...register('birthday',{required:true})} id="birthday" className="form-control w-100 p-2"/>
              {errors.birthday?.type==="required" && <p className="text-danger">*date is required</p>}
              </div>
              {/* Gender */}
              <div className="col">
              <label className="">Gender</label>
                {/* male */}
              <div className="d-flex mt-4">
              <div className="me-5 form-check d-flex align-items-center">
                <input type="radio" {...register('gender',{required:true})} id="male" className="form-check-input" value="male"/>
                <label htmlFor="male" className="form-check-label ms-2">Male</label>
              </div>
              {/* female */}
              <div className="form-check d-flex align-items-center">
                <input type="radio" {...register('gender',{required:true})} id="female" className="form-check-input" value="female" />
                <label htmlFor="female" className="form-check-label ms-2">Female</label>
              </div>
              </div>
              {errors.gender?.type==="required" && <p className="text-danger">*enter gender</p>}
              </div>
            </div>
            {/* third */}
            <div className="row w-75 mt-3">
              {/* Email */}
              <div className="col form-group me-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" {...register('email',{required:true})} id="email" className="form-control w-100 p-2"/>
                {errors.email?.type==="required" && <p className="text-danger">*enter email</p>}
              </div>
               {/* phone number */}
               <div className="col form-group ">
                <label htmlFor="phNo" className="form-label">Phone Number</label>
                <input type="number" {...register('phNo',{required:true,minLength:10,maxLength:10})} id="phNo" className="form-control form-number w-100 p-2"/>
                {errors.phNo?.type==="required" && <p className="text-danger">*Phone number required</p>}
                {errors.phNo?.type==="minLength" && <p className="text-danger">*should contain 10 digits</p>}
                {errors.phNo?.type==="maxLength" && <p className="text-danger">*should contain 10 digits</p>}
              </div>
            </div>
            {/* fourth */}
            <div className="form-group w-75 mt-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <select name="subject" {...register('subject',{required:true})} className="form-select p-2" id="subject" defaultValue="">
              <option value="" disabled className="">select subject</option>
              <option value="maths">Maths</option>
              <option value="physics">Physics</option>
              <option value="chemistry">chemistry</option>
              </select>
              {errors.subject?.type==="required" && <p className="text-danger">*select subject</p>}
            </div>
            <button className="btn btn-primary mt-5 p-2 w-25">Submit</button>
            </div>
        </form>
        {/* <UsersList obj={}/> */}
    </div>
  )
}

export default Forms