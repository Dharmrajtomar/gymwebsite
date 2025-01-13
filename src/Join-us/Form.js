import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Join-us/Form.css'
import bg from './pic&video/background.mp4'
import Signup from './Signup'
export default function Form() {
  const [formlgin, setformlogin]=useState(false)
  return (
    <div className='m-form-div'>
      <div className='form-video'>
        <video src={bg} autoPlay loop muted></video>
      </div>
       
       <div className='form-controll'>
       <div className='form-signup' onClick={()=>setformlogin(true)}> SIGN-UP</div>
       <div className='form-login'>LOG-IN</div>
       </div>
       {formlgin && <Signup setformlogin={setformlogin}/>}


 {/* <div className='new-form'>
      
      <form action="" className='form-topic'>
        <label for=""><input type="text" placeholder='enter your name' required /></label>
        <label for=""><input type="number" placeholder='enter your number'required/></label>
        <label for=""><input type="text"placeholder='enter your password' required /></label>
         <label for=""><input type="text"placeholder='Login'/> </label>
       
      </form>
      <p>forget your password</p>

        <div>
            <h1>WELLCOME</h1>
            <Link to="/signup">signup</Link>
        </div>
      <Link to="/">back to home</Link>
    </div> */}
    </div>
   
  )
}
