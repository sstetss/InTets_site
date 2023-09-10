import React from 'react';
import tele from './images/icons8-телеграмма-app-96.png';
import insta from './images/icons8-instagram.svg';
import location from './images/narker.png';
import logo from './images/logo_2.png';

import './footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_contact'>
         <div className='footer_logo'>
         <img className='footer_img_logo' src={logo} alt='hamb' />
         <h1 className='footer_h1'>InTest</h1>
         </div>
      
      <a className='footer_but_test' href='https://ig.me/m/julia_szyman'>Rozpocznij Testowanie</a>
      <div className='footer_location_box'>
      <img className='footer_img_location' src={location} alt='hamb' />
      <div className='footer_location_text'>Warszawa , Polska</div>
      </div>
      <div className='footer_social'>
         <a href='https://ig.me/m/julia_szyman'><img className='footer_img' src={insta} alt='hamb' /></a>
         <a href='https://t.me/testowanie_pl'><img className='footer_img' src={tele} alt='hamb' /></a>
      </div>
      </div>
      <div className='policy'>
         <span className='footer_span'>Contact</span>
         <span className='footer_span'>FAQ</span>
         <span className='footer_span'>Support</span>
         <span className='footer_span'>Blog</span>
         <span className='footer_span'>Events</span>
         <span className='footer_span'>2023</span>
      </div>
    </div>
  );
}

export default Footer;