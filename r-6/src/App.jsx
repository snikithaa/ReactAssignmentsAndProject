import { createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Technologies from './Technologies'
import UserProfile from "./UserProfile";
function App() {
  const browserRouterObj=createBrowserRouter([
    {
    path:"",
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"technologies",
        element:<Technologies/>
      },
      {
        path:"userProfile/:username",
        element:<UserProfile/>
      }
    ],
    }
    
  ],
  {
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true
    },
}
  )
  return (
    <div>
      <RouterProvider router={browserRouterObj}/>
    </div>
  )
}
export default App
