import '../style/Header.css'
import React, { useState } from 'react';
import Menu from './menu';

const Header = () =>{

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
} 

    return( 
    <header>
    <div className="header_block">
        <div className='none'></div>
         <div className='header_burger' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
         </div>
         
      <div className={`burger ${isOpen ? 'open' : ''} mobile_header`}>
     <div className='mobile_backgrond'></div>
     <div className='mobile_menu_header'> 
     <div className="header_logo"></div>
     <div className='header_close' onClick={toggleMenu}></div>
    </div>
    <hr/>
     <div className='mobile_nav'>
        <ul className='mobile_menu'>
            <li><a href='#'>Demos</a></li>
            <hr/>
            <li><a href='#'>Post</a></li>
            <hr/>
            <li><a href='#'>Features</a></li>
            <hr/>
            <li><a href='#'>Categories</a></li>
            <hr/>
            <li><a href='#'>Shop</a></li>
            <hr/>
            <li><a href='#'>Buy Now</a></li>
        </ul>
     </div>
      </div>
     <div className="header_logo"></div>
     <div className="header_icon"></div>
    </div> 
     <hr/>
    <Menu/>
<hr/>
    </header>

);
    }
export default Header;