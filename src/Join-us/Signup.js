import React from 'react'

export default function Signup() {
  return (
    <div>
     <div className='new-form'>
      
      <form action="" className='form-topic'>
        <label for=""><input type="text" placeholder='enter your name' required /></label>
        <label for=""><input type="number" placeholder='enter your number'required/></label>
        <label for=""><input type="text"placeholder='enter your password' required /></label>
         <label for=""><input type="text"placeholder='Login'/> </label>
       
      </form>
      <p>forget your password</p>

        <div>
            <h1>WELLCOME</h1>
            {/* <Link to="/signup">signup</Link> */}
        </div>
      {/* <Link to="/">back to home</Link> */}
    </div>
    </div>
  )
}
