import React from 'react';
import './styles.css';
import IconFacebook from '../../assets/icons/facebook.svg'
import IconTwitter from '../../assets/icons/twitter.svg'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <h3>SINFCOR - IFPI</h3>
        <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
        <div className='social-links'>
          <a href='https://www.facebook.com/'>
            <img src={IconFacebook} alt='Facebook' />
          </a>
          <a href='https://www.twitter.com/'>
            <img src={IconTwitter} alt='Twitter' />
          </a>
        </div>
      </div>
    </div>
  );
};
