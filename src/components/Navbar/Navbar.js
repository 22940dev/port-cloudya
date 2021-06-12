import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='navItem '>
        <h3 className='navItem__text'>start</h3>
        <span className='navItem__circle'></span>
      </Link>

      <Link
        activeClass='active'
        to='projects'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='navItem'>
        <h3 className='navItem__text'>Projects</h3>
        <span className='navItem__circle'></span>
      </Link>

      <Link
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='navItem'>
        <h3 className='navItem__text'>About</h3>
        <span className='navItem__circle'></span>
      </Link>
    </div>
  )
}

export default Navbar
