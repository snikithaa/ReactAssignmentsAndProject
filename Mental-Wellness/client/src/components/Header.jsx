import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react'
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
import logo from "../assets/logo.svg"
function Header() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk()
  const navigate = useNavigate()

  // function to signout
  async function handleSignout() {
    await signOut();
    setCurrentUser(null);
    navigate('/');
  }

  function navigateToSign() {
    navigate('/signin')
  }

  return (
    <div className='' style={{backgroundColor:"#6A5ACD"}}>
      <nav className='header d-flex justify-content-between align-items-center'>
        <div className="">
          <Link to="" className='nav-link'><img src={logo} alt="" width={"80px"} style={{borderRadius:"5%"}} /></Link>
        </div>
        <div className="d-flex  justify-content-center align-items-center pt-1" style={{ minWidth: "30vw" }}>
          <ul className='d-flex gap-5 list-unstyled justify-content-between align-items-center nav'>
            {
              !isSignedIn ?
                <>
                  <li><Link to="/" className='nav-link text-white fs-5' >Home</Link></li>
                  {/* <li><Link to="section2" smooth={true} duration={500}>
                    Featrures
                  </Link></li> */}
                  <li onClick={navigateToSign}><Link className='nav-link text-white fs-5'>Signin</Link></li>

                </>
                :
                <div className="user-button d-flex  gap-5 pt-1">

                  <li><Link to="/" className='nav-link text-white fs-5' >Home</Link></li>
                  {/* <li><Link to="signup" className='nav-link' >Features</Link></li> */}

                  <div className="d-flex justify-content-center align-items-center gap-3" style={{ position: "relative" }}>
                    <img src={user.imageUrl} width="40px" alt="" className='rounded-circle' />
                    <p className='mb-0 user-name text-white' style={{fontSize:"1.2rem"}}>{user.firstName}</p>
                  </div>
                  <button className="btn-danger btn" onClick={signOut}>SignOut</button>
                </div>
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header