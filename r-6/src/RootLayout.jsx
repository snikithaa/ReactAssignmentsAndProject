import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function RootLayout() {
  return (
    <div>
      <Header/>
      <div style={{minHeight:'100vh'}}>
        <Outlet/>
      </div>
      <Footer/>

    </div>
  )
}

export default RootLayout