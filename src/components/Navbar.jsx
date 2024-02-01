import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#D9CCE8] text-slate-900'>Navbar
       
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '80px'}} />
        </div>
 
       {/* Menu */}

         <ul className='md:flex'>
             <li>Home</li>
             <li>About</li>
             <li>Experience</li>
             <li>Contact</li>
         </ul>
        

       {/* Hamburger */}
        <div onClick={handleClick} className='md:flex z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

       {/* Mobile Menu */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-1 w-full h-screen bg-[#A087B9] flex flex-column justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Experience</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

       {/*Social Icons */} 
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar