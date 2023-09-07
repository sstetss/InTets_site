import React from 'react';
import logo2 from './images/logo_2.png';
import hamb from './images/Hamburger_Menu.png';
import './header.css'


function Header() {
  return (
    <div className='header_nav'>
      <div className='header_logo'>
        <img className='header_img' src={logo2} alt='logo2' />
        <h1 className='header_h1'>InTest</h1>
      </div>
      <a href='#'><img className='header_img_burger' src={hamb} alt='hamb' /> </a>
    </div>
  );
}

export default Header;

