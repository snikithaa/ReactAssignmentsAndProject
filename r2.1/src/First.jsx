import './First.css'
import './reset.css';
import img1 from './assets/1.svg';
function First() {
  return (
    <div className="main">
        <div className="first">
          <div className='ms-5 height'>
            <h1 className='text-white size'>React Projects</h1>
            <p className='mt-3 fs-5'>Get a variety of practical applications and hands on</p>
            <p className='fs-5'>experience with this guide to React projects</p>
          </div>
        </div>
        <div className="second">
          <img src={img1} alt="" className=''/>
        </div>
    </div>
  )
}

export default First