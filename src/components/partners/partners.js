import React from 'react';
import ice from './images/ice.svg';
import hot from './images/HotSlots_Casino_Logo_Review.png';
import spin from './images/spin_city.svg';
import slot from './images/24Slots_Casino_Logo_Review.png';
import neon from './images/Neon54-casino-logo-1.png';
import gg from './images/gg_bet.png';


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
      <img className='part_img' src={slot} alt='hamb' />
      <img className='part_img' src={neon} alt='hamb' />
      <img className='part_img' src={hot} alt='hamb' />
      </div>
    </div>
  );
}

export default Partners;
