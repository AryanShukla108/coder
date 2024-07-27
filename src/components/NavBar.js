import React from 'react'
import logoCoder from "../assests/logo-coder.png"

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo-box'>
        <img src={logoCoder} alt="" className='logo'></img>
      </div>

      <ul className='list'>
        {/* <li onClick={() => (window.location.href = 'about-us')}>About Us</li> */}
        <li onClick={() => (window.location.href = 'service')}>Service</li>
        {/* <li onClick={() => (window.location.href = 'project')}>Case Studies</li> */}
        <li onClick={() => (window.location.href = 'healthcare')}>For Companies </li>
        <li onClick={() => (window.location.href = 'project')}>For Developers </li>
        {/* <li>Reviews</li> */}
        {/* <li onClick={() => (window.location.href = 'privacy')}>Privacy & Policy</li> */}
        <li onClick={() => (window.location.href = 'job')}>Schedule a call</li>
        {/* <li onClick={() => (window.location.href = 'service-other')}>Other service</li> */}
      </ul>
      <div className='nav-btn-box'>
        {/* <button className='nav-btn'> Sign In</button> */}
        <button onClick={() => (window.location.href = 'hire')} className='nav-btn'>  Hire Developers</button>
      </div>

    </div>
  )

}