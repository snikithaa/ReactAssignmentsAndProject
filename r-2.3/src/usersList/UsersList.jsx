import './UsersList.css'
function UsersList(props) {
  return (
    <div>
        <div className="card ms-5 mt-4 mb-5">
            <div className="card-body">
            <img src={props.usersList.image} alt=""width="150px"/>
            <div className='p-4'>
            <div className='d-flex  p'>
            <h6 className='me-3 fw-bold '>Username</h6>
            <p className='text-secondary'>{props.usersList.username}</p>
            </div>
             
            <div className='d-flex mt-2'>
            <h6 className='me-5 fw-bold'>Email</h6>
            <p className='text-secondary'>{props.usersList.email}</p>
            </div>

            <div className='d-flex mt-2'>
            <h6 className='me-4 fw-bold'>Address</h6>
            <p className='text-secondary'>{props.usersList.email}</p>
            </div>
            </div>

            
            </div>
        </div>
    </div>
  )
}

export default UsersList