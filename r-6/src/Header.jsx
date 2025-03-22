import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="bg-secondary p-2">
      <nav className="">
        <ul className="nav d-flex justify-content-end">
          <li className="nav-item">
            <Link to="" className="nav-link text-dark">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="register" className="nav-link text-dark">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link text-dark">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="technologies" className="nav-link text-dark">Technologies</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header