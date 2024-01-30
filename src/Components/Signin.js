import React from 'react'
import './Signin.css'


export default function Signin() {

  return (
    <div className='foorm1'>
        <label htmlFor="html">Email</label>
        <input type="text" name="mail" id="mail" placeholder='Enter your email' />
        <label htmlFor="html">Password</label>
        <input type="password" name="pass" id="pass" placeholder='Enter password' />
        <a href="!">forgor password</a>
        <button type='button' onClick={alert}>Sign-In</button>
    </div>
  )
}
