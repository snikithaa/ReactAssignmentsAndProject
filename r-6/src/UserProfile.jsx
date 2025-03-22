import { useLocation } from "react-router-dom"
function UserProfile() {
  const {state}=useLocation()
  return (
    <div>
      <h1>{state.username}</h1>
    </div>
  )
}

export default UserProfile