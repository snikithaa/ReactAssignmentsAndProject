import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";   
function Footer() {
  return (
    <div className='p-3 bg-dark d-flex justify-content-around align-items-center list-unstyled text-white'>
        <ul className='list-unstyled'>
            <li>Empowering individuals through AI-powered <br />mental health support and professional guidance</li>
            <li className='mt-3'><FaFacebook /> <FaTwitter /> <FaInstagram /></li>
        </ul>
        <ul className='list-unstyled'>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
            <li>Resources</li>
        </ul>
        <ul className='list-unstyled'>
            <li>AI Chatbot</li>
            <li>Mood Tracking</li>
            <li>Meditation</li>
            <li>Resources</li>
            <li>Expert Support</li>
        </ul>
        <ul className='list-unstyled'>
            <li><IoMail /> support@mindai.com</li>
            <li><IoCallOutline /> 1-800-MENTAL-HEALTH</li>
        </ul>
    </div>
  )
}

export default Footer