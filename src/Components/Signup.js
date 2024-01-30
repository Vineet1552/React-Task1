import React from 'react'
import './Signup.css'

export default function Signup() {
  return (
    <div className='foorm'>
        <label htmlFor="html">Name</label>
        <input type="text" name="Name" id="Name" placeholder='Enter your name'/>
        <label htmlFor="html">Email</label>
        <input type="text" name="mail" id="mail" placeholder='Enter your email' />
        <label htmlFor="html">Password</label>
        <input type="password" name="pass" id="pass" placeholder='Enter password' />
        <button type='button' onClick={alert}>Sign-Up</button>
    </div>
  )
}
