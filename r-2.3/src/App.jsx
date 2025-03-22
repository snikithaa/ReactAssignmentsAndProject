import Footer from './footer/Footer';
import NavBar from './navBar/NavBar';
import './reset.css';
import UsersList from './usersList/UsersList';
let userList=[
  {
      image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
      username:"will jacks",
      email:"will@gmail.com",
      address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  },
  {
    image:"https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png",
    username:"will jacks",
    email:"will@gmail.com",
    address:"new york"
  }
]
function App() {
  return (
    <div>
      <NavBar/>
      <div className='d-flex flex-wrap text-center user justify-content-center'>
      {
        userList.map((user,index)=>(
          <UsersList usersList={user} key={index}/>
        ))
      }
      </div>
      <Footer/>
    </div>
  )
}

export default App