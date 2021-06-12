
import React, {useEffect, useState} from 'react';
import CursorText from './CursorText/CursorText';

import './Cursor.css'

import { IoLogoJavascript} from "@react-icons/all-files/io/IoLogoJavascript";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { ImHtmlFive } from "@react-icons/all-files/im/ImHtmlFive";
import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {SiMaterialUi} from "@react-icons/all-files/si/SiMaterialUi";

const Cursor = () => {
 const [position, setPosition] = useState({x: 0, y: 0});
 const [hidden , setHidden] = useState(false);
 
 const mainDiv = document.getElementById("root");

  useEffect(() => {
      addEventListeners();
      return () => removeEventListeners();
  });

  const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      mainDiv.addEventListener("mouseenter", onMouseEnter);
      mainDiv.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      mainDiv.removeEventListener("mouseenter", onMouseEnter);
      mainDiv.removeEventListener("mouseleave", onMouseLeave);
  };

  const onMouseMove = (e) => {
      setPosition({x: e.clientX, y: e.clientY});
  };
  
  const onMouseEnter = () =>{
      setHidden(false);
  }

  const onMouseLeave = () => {
      setHidden(true);
  }

  const cursorClasses =  'cursor';
  


    return (
        <div style={{top:`${position.y}px`, left: `${position.x}px`}} className={cursorClasses}>
            <CursorText/>
            <div className='cursor_iconBox'>

            <div className='cursor_icon icon1'>
            <IoLogoJavascript  fontSize='13' color='yellow'/>
            </div>

            <div  className='cursor_icon icon2'>
            <ImHtmlFive fontSize='13' />
            </div>

            <div  className='cursor_icon icon3'>
            <IoLogoCss3   fontSize='13'/>
            </div>
            
            <div  className='cursor_icon icon4'>
            <FaReact fontSize='13'/>
            </div>

            <div  className='cursor_icon icon5'>
            <SiRedux  fontSize='13'/>
            </div>

            <div  className='cursor_icon icon6'>
            <SiMaterialUi   fontSize='13'/>
            </div>
           

            {/* <ImHtmlFive className='cursor_icon icon2' />
            <IoLogoCss3  className='cursor_icon icon3'/>
            <FaReact className='cursor_icon icon4'/>
            <SiRedux  className='cursor_icon icon5'/>
            <SiMaterialUi  className='cursor_icon icon6'/> */}
            </div>
        </div>
    )
}

//style={{top:`${position.y}px`, left: `${position.x}px`}}
export default Cursor;