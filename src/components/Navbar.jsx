import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style'
import { navLinks } from '../constants'
import {menu,close} from '../assets'
import alfezLogo from '../assets/alfezLogo.png'


const Navbar = () => {
  const [active,setActive] = useState("")
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}>
      <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={()=>{
           setActive("");
           window.scrollTo(0,0)
        }}>
          <img src={alfezLogo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[15px] font-bold cursor-pointer'>Alfez <span className='sm:block hidden'>Mansuri</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title?"text-white":"text-secondary"} hover:text-white cursor-pointer font-medium text-[16px]`} onClick={()=> setActive(link.title)}>
              <a id={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar