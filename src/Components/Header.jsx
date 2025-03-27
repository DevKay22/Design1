import React from 'react';
import '../Styles/Header.css';
import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <div className='main'>
        <div className='bg-overlay'>

        </div>
        {/* Navigation bar */}
        <div className='container'>
        <div className='logo'>
            <div id='blue'>S</div>
            <div id='white'>W</div>
            <div id='blue'>A</div>
        </div>
        <div className='navItems'>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Story</div>
            <div>Gallery</div>
            <div>Event</div>
            <div>Contact</div>
            <div>Login</div>
        </div>
    </div>

    {/* Hero banner section */}
    <div className='herobanner'>
        <div className='heroItems'>
            <div id='blue'>
                <h2>ACTIVE</h2>
            </div>
            <div id='white'>
                <h2>STRENGTH</h2>
            </div>
            <div id='blue'>
                <h2>UNITY</h2>
            </div>
        </div>
        <div className='heroContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel nobis dolor deserunt eos placeat odio expedita consectetur quos voluptate, perspiciatis autem architecto nesciunt provident ipsa amet, incidunt consequuntur doloremque?</div>
        <div className='heroMore'>
            <button >Read More <span className='faplay'><FaPlay /></span></button>
        </div>
    </div>

    </div>
    
  )
}

export default Header