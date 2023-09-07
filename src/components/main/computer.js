import React from 'react';
import comp from './images/comp_1.svg';
import './computer.css'


function Computer() {
  return (
    <div className='main'>
      <div className='main_h1'>
      Testowanie Aplikacji
      </div>
      <div className='main_sub'>
      Jesteśmy InTest, firmą zajmującą się testowaniem aplikacji i kasyn
      </div>
      <div className='main_box'>
         <a href="#" className='main_button'> Test </a>
         <img className='main_img' src={comp} alt='logo2' />
      </div>
    </div>
  );
}

export default Computer;