import { useState } from "react"

function UserCount(props) {
  
  return (
    <div className="text-center">
      <h1>COUNT</h1>
      <button className="btn btn-secondary p-3 fs-1 w-25">{props.userIncrement}</button>
    </div>
  )
}

export default UserCount