import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutLineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#D6D9C5] text-slate-900'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width: '80px'}} />
        </div>
 
       {/* Menu */}
         <ul className='hidden md:flex'>
             <li> 
                <Link to="home" smooth={true} duration={500}> Home </Link>
              </li>
              <li> 
                <Link to="about" smooth={true} duration={500}> About </Link>
              </li>
              <li> 
                <Link to="experience" smooth={true} duration={500}> Experience </Link>
              </li>
              <li> 
                <Link to="contact" smooth={true} duration={500}> Contact </Link>
              </li>

         </ul>
        

       {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

       {/* Mobile Menu */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#D6D9C5] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link>
              </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="experience" smooth={true} duration={500}> Experience </Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

       {/*Social Icons */} 
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5d94b2]'>
              <a className='w-full flex justify-between items-center text-[#260906]' href="/">
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#767474]'>
              <a className='w-full flex justify-between items-center text-[#260906]' href="/">
               GitHub <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar