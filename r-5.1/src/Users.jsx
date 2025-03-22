import UserCount from "./UserCount";
import { useState } from "react";
function Users(props) {
  let [add,setadd]=useState(0)
  function handleClick(){
    props.handleUserIncrement()
  }
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div className="">
        <div className="card">
          <div className="card-body mx-auto">
            <p className="card-text">{props.userData.name}</p>
            <p className="card-text">{props.userData.username}</p>
            <p className="card-text">{props.userData.email}</p>
            <p className="card-text">{props.userData.address.street}</p>
            <button className="btn btn-primary d-block mx-auto" onClick={handleClick}>Add</button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Users;
