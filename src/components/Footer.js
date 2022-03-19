import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Најдоброто место за одмор во Македонија
        </p>
             
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>За Хотелот</h2>
            <Link to='/sign-up'>Понуди</Link>
            <Link to='/'>Броеви за контакт</Link>
            <Link to='/'>Локација</Link>
            <Link to='/'>Instagram</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Слики</h2>
            <Link to='/'>Слики од Хотелот и Плажата</Link>
            <Link to='/'>Слики од Апартмани</Link>
          </div>
          
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              EUROTEL
              <i class='fa-solid fa-earth-europe' />
            </Link>
          </div>
          <small class='website-rights'>EvroHotel-Struga 1984 </small>
          <div class='social-icons'>
            
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;