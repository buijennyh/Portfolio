import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#A087BC] text-slate-900'>Navbar
       
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
        </div>

        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Contact</li>

            </ul>
        </div>

       {/* Hamburger */}
        <div className='hidden flex'>
            <FaBars />
        </div>

       {/* Mobile Menu */}
       <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Experience and Work</li>
            <li>Contact</li>
        </ul>

       {/*Social Icons */} 
    {/*BOOKMARK- 16:15 URL:https://www.youtube.com/watch?v=2kg0z1qNrkw}*/}

        <div></div>

    </div>
  )
}

export default Navbar