import React from 'react'
import '../product/csscode/Newsletter.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className='newsletter-section'>
      <div class="newsletter-content">
        <span className='small-text'>Newsletter</span>
        <span className='big-text'>sign up for latest updates and offers</span>
        <div class="form">
          <input type="text" placeholder='Email Address'/>
          <button>Subscribe</button>
        </div>
        <div class="text">Will be used in accordance with our privacy policy</div>
        <div class="social-icons">
         <div class="icon">
          <FaFacebook size={14}/>

         </div>
         <div class="icon">
         <FaTwitter size={14}/>

         </div>
         <div class="icon">
          <FaYoutube size={14}/>

         </div>
         <div class="icon">
          <CiInstagram size={14}/>

         </div>
         <div class="icon">
          <FaLinkedin size={14}/>

         </div>
        </div>
      </div>
      
    </div>
  )
}
