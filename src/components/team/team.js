import React from 'react';

import './team.css'
import 'slider-moon/dist/style.css'
import tem_1 from './images/TEM_1.png';
import tem_2 from './images/TEM_2.png';
import tem_3 from './images/TEM_3.png';
import { register } from 'swiper/element/bundle';
register();

function Team() {
  return (
    <div className='team'>
      <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true">
   <swiper-slide>
   <div className='team_img_block'>
   <img className='team_img' src={tem_2} alt='hamb' />
   <div className='team_img_text'>
      <h1 className='team_img_h1'>
      Alicja Wójcik
      </h1>
   </div>
   </div>
   </swiper-slide>
   <swiper-slide>
   <div className='team_img_block'>
   <img className='team_img' src={tem_1} alt='hamb' />
   <div className='team_img_text'>
      <h1 className='team_img_h1'>
      Filip Nowak
      </h1>
   </div>
   </div>
   </swiper-slide>
   <swiper-slide>
   <div className='team_img_block'>
   <img className='team_img' src={tem_3} alt='hamb' />
   <div className='team_img_text'>
      <h1 className='team_img_h1'>
      Zofia Kowalska
      </h1>
   </div>
   </div>
   </swiper-slide>
</swiper-container>
    </div>
  );
}

export default Team;


