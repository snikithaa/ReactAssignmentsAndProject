import './App.css'

import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Signin from './components/Signin';
import ChatBot from './components/ChatBot'
import Dairy from './components/Dairy';
import Breathing from './components/Breathing';
import Music from './components/Music'
import Resources from './components/Resources';
import DoctorConnect from './components/DoctorConnect';


function App() {
  

const browserRouterObj=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'signin',
        element:<Signin />
      },
      {
        path:'/user-profile/:email',
        element:<Home />,
      },
      {
        path:'chatbot',
        element:<ChatBot/>
      },{
        path:'dairy',
        element:<Dairy/>
      },{
        path:'breathing-excersice',
        element:<Breathing/>
      },{
        path:'music',
        element:<Music/>
      },{
        path:'resources',
        element:<Resources/>
      },{
        path:'doctor',
        element:<DoctorConnect/>
      }
    ]
  }
])

  return <RouterProvider router={browserRouterObj}/>
}

export default App