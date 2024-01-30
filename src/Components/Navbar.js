// Navbar.js
import React from 'react';
import './Navbar.css';
import Signin from './Signin';
import Signup from './Signup';
import { useDispatch, useSelector } from 'react-redux';
import { open1, open2 } from '../Actions';

export default function Navbar() {
  const { modalOpen1, modalOpen2 } = useSelector((state) => state.Modal1);
  const dispatch = useDispatch();

  const handleSignin = () => {
    dispatch(open1());
  };

  const handleSignup = () => {
    dispatch(open2());
  };

  return (
    <>
      <div className="container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <div>
            <button className='but1' onClick={handleSignin}>SignIN</button>
            <button className='but2' onClick={handleSignup}>SignUP</button>
            
          </div>
        </ul>
      </div>
      {!modalOpen1 && <Signin />}
            {!modalOpen2 && <Signup />}
    </>
  );
}
