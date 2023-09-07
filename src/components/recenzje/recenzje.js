import React from 'react';
import avatar_1 from './images/avatar-221674-066692.png';
import avatar_2 from './images/avatar-231709-088398.png';


import './recenzje.css'


function Review() {
  return (
    <div className='review'>
      <h1 className='review_h1'>Recenzje</h1>
      <div className='review_box_sum'>
         <div className='review_box'>
         <img className='review_img' src={avatar_1} alt='hamb' />
         <p className='review_text'>
         Przetestowałem aplikację, wszystko poszło dobrze. Bardzo podobało mi się, że menedżerowie są bardzo przyjaźni i są w kontakcie 24/7. Każdy krok był pod nadzorem menedżera. Podczas testów wygrałem mega bonus, który zatrzymałem dla siebie i jest super. Będę kontynuował testowanie aplikacji z zespołem InTest.
         </p>
         <h2 className='review_sub'>Kacper Vyzhytskyi</h2>
         <p className='review_stars'>⭐⭐⭐⭐⭐</p>
         </div>
         <div className='review_box'>
         <img className='review_img review_img_2' src={avatar_2} alt='hamb' />
         <p className='review_text'>
         Super! Bardzo szybko przeszedł test. Przetestowaliśmy kilka aplikacji i wszystko odbyło się przy wsparciu menedżera. Najlepszym bonusem było to, że wygrałem super bonus w aplikacji i zatrzymałem całą wygraną dla siebie. Będę nadal testował i odbierał super bonusy.          </p>
         <h2 className='review_sub'>Elena Zaremba</h2>
         <p className='review_stars'>⭐⭐⭐⭐⭐</p>
         </div>
      </div>
    </div>
  );
}

export default Review;

