import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* Footer logo */}
      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          BACKPACK <i className="fab fa-backpack"></i>
        </Link>
      </div>

      {/* Subscription */}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Receive our exclusive travel deals and guides <i className="fab fa-gripfire"></i> - Your next adventure awaits!!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* About */}
          <div className='footer-link-items'>
            <Link to='/about'><h2>About Us</h2></Link>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        {/* Contact */}
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
        {/* Social media */}
          <div className='footer-link-items'>
            <h2>Social Share</h2>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <section className='copyright'>
        <div className='copyright-wrap'>
          <small className='website-rights'>BackPack © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
