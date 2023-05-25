import React, { useEffect } from 'react';
import '../style/Header.css'


const Menu =()=>{

    useEffect(() => {
        const handleScroll = () => {
          const menuContainer = document.querySelector('.menu-container');
          const scrollPosition = window.pageYOffset;
    
          if (scrollPosition >= 200) {
            menuContainer.classList.add('menu-container--scrolled');
          } else {
            menuContainer.classList.remove('menu-container--scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return(
        <nav className='menu-container'>
     <div class="menu">
    <ul>
      <li>
        <a href="#">Demos</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Post</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Features</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Categories</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Shop</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Buy Now</a>
        <ul class="submenu">
        <li><a href="#">Post Header</a></li><hr/>
          <li><a href="#">Post Layout</a></li><hr/>
          <li><a href="#">Share Buttons</a></li><hr/>
          <li><a href="#">Gallery Post</a></li><hr/>
          <li><a href="#">Video Post</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Menu;