import './NavBar.css';
import { IoLogoSass } from "react-icons/io";
function NavBar() {
  return (
    <div>
        <div className='navbar navbar-expand-sm nav-border'>
        <a href="#" className='ms-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R731BRyUjLS6xtribWcx1r03kySnQFuWGQ&s" width="90px" alt="" />
        </a>
        <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target="#nav">
        <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="nav">
        <ul className='navbar-nav navi'>
          <li className='nav-item ms-5'>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className='nav-item ms-5'>
          <a href="#" className="nav-link">Signup</a>
          </li>
          <li className='nav-item ms-5 me-5'>
          <a href="#" className="nav-link">Login</a>
          </li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default NavBar