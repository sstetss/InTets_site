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
      Napisz do nas, aby przetestować nasze programy, wszystkie testy są przeprowadzane na nasz koszt.       </div>
      <h1 className='hand_emoji_1'>👉</h1>
        <h1 className='hand_emoji_2'>👉</h1>
        <h1 className='hand_emoji_3'>👉</h1>
      <div className='main_box'>
         <a href="https://ig.me/m/julia_szyman" className='main_button'> Pisać </a>
         <img className='main_img' src={comp} alt='logo2' />
      </div>
    </div>
  );
}

export default Computer;