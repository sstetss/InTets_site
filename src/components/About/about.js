import React from 'react';
import ipad from './images/ipad.svg';

import './about.css'


function About() {
  return (
    <div className='about'>
      <img className='about_img' src={ipad} alt='hamb' />
      <h1 className='about_h1'>O Nas</h1>
      <p className='about_par'>
      Jesteśmy InTest, firmą zajmującą się testowaniem aplikacji i kasyn. 
Obecnie testujemy aplikacje dla różnych licencjonowanych kasyn w Polsce. Nasz zespół składa się z wielu profesjonalnych testerów. Tworzymy komfortowe warunki do testowania aplikacji i nauki mechanizmów testowania.
      </p>
    </div>
  );
}

export default About;
