import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import { Outlet } from 'react-router-dom'

function Home() {




  return (
    <div>
      <section> <Section1 /> </section>

      <section> <Section2 /> </section>

      
      
    </div>
  )
}

export default Home