import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='boxed'>ЕУРОТЕЛ АПАРТМАНИ  СТРУГА</h1>
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ИНФО <i class="fa-solid fa-circle-info"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          АПАРТМАНИ <i class="fa-solid fa-hotel"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;