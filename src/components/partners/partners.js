import React from 'react';
import ice from './images/App_Store_(iOS).svg.png';
import hot from './images/Instagram_logo_2016.svg.png';
import spin from './images/Logo_of_Twitter.svg.png';
import slot from './images/Tiktok_Logo.png';
import neon from './images/google-play-store-icon-logo-symbol-free-png.webp';
import gg from './images/Android_robot.svg.png';


import './partners.css'


function Partners() {
  return (
    <div className='part'>
      <div className='part_box'>
      <img className='part_img' src={ice} alt='hamb' />
      <img className='part_img' src={gg} alt='hamb' />
      <img className='part_img' src={spin} alt='hamb' />
      </div>
      <div className='part_box'>
      <img className='part_img' src={gg} alt='hamb' />
      <img className='part_img' src={neon} alt='hamb' />
      <img className='part_img' src={hot} alt='hamb' />
      </div>
    </div>
  );
}

export default Partners;
