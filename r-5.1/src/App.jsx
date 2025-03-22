import Users from "./Users";
import { useState } from "react";
import { useEffect } from "react";
import UserCount from "./UserCount";
function App() {
  let [userIncrement,setUserIncrement]=useState(0)
  function handleUserIncrement(){
    setUserIncrement(userIncrement+1)
  }
  let [users,setusers]=useState([])
  let [error,seterror]=useState(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(userData=>setusers(userData))
  .catch(err=>seterror(err))
  },[]
  )
  return (
    <div>
      <UserCount userIncrement={userIncrement}/>
      <div className="row ">
      {
        users.map(obj=>(
          <Users key={obj.id} userData={obj} handleUserIncrement={handleUserIncrement}/>
        ))
      }
      </div>
    </div>
  )
}

export default App