import React from 'react';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-content'>
        <div className='scrool-top' onClick={() => window.scrollTo(0, 0)}>
          <i className='fa fa-fighter-jet' style={{ cursor: 'pointer' }}></i>
        </div>
        <ul className='icons-link'>
          <li>
            <a href='#'>
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/moradov' target='_blank'>
              <i className='fa fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='copy-right'>
        Morad Elazyzy <span className='craete-date'> &copy;2019</span>
      </div>
    </section>
  );
};

export default Footer;
