import React from 'react'

import './Header.css'
import TreeSvg from '../TreeSvg/TreeSvg'
import Navbar from '../Navbar/Navbar'
import resume from '../../assets/Resume.pdf'

const Header = () => {
  return (
    <div className='header' id='home'>
      <div className='menu'>
        <Navbar />


        {/* <div className='icon__box'>
          <Icon size='small' section='header' />
        </div> */}
      </div>
      <div
        data-aos='fade-right'
        data-aos-easing='ease'
        data-aos-once={true}
        className='text__box'>
        <h1 className='text__box--greeting'>Hello;</h1>
        <h3 className='text__box--para'>
          I'm Yahya, <span>M</span> <span>E</span> <span>R</span>{' '}
          <span>N</span> stack developer looking for an Internship
        </h3>
        <a href={resume} download><button  className='text__box--button'>download CV</button></a>
        
      </div>
      <div className='svg__box'>
        <TreeSvg />
      </div>
    </div>
  )
}

export default Header
