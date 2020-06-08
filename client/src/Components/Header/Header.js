import React, { useEffect, useState } from 'react';

const Header = () => {
  /// scrolling postion state
  const [scrollingPosition, setScrollingPosition] = useState({
    about: null,
    projects: null,
    contact: null
  });
  //active link state
  const [active, setActive] = useState('home');

  // when the component is loaded
  useEffect(() => {
    /// select elements by id
    const header = document.getElementById('header');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    const nav = document.getElementById('nav');
    // set the scrolling position for each elements in the state
    setScrollingPosition({
      about: about.offsetTop,
      projects: projects.offsetTop,
      contact: contact.offsetTop
    });
    // on scrolling
    window.addEventListener('scroll', () => {
      //make the nav fixed
      if (header.getBoundingClientRect().bottom < 43) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
      } else {
        nav.style.position = 'relative';
      }

      //chek each element when gets show in the screen set the active link
      if (
        header.getBoundingClientRect().height -
          header.getBoundingClientRect().bottom >
          0 &&
        header.getBoundingClientRect().top >
          -header.getBoundingClientRect().height
      ) {
        setActive('home');
      }

      if (
        about.getBoundingClientRect().height -
          about.getBoundingClientRect().bottom >
          0 &&
        about.getBoundingClientRect().top >
          -about.getBoundingClientRect().height
      ) {
        setActive('about');
      }

      if (
        projects.getBoundingClientRect().height -
          projects.getBoundingClientRect().bottom >
          0 &&
        projects.getBoundingClientRect().top >
          -projects.getBoundingClientRect().height
      ) {
        setActive('projects');
      }

      if (
        contact.getBoundingClientRect().height -
          contact.getBoundingClientRect().bottom >
          0 &&
        contact.getBoundingClientRect().top >
          -contact.getBoundingClientRect().height
      ) {
        setActive('contact');
      }
    });
  }, []);

  return (
    <header id='header'>
      <div className='header-background' id='Clouds'></div>

      <div className='header-content'>
        <div className='main-content'>
          <h2>
            Hello, I'm
            <span className='my-name'> Morad Elazyzy</span>
            <br />
            I'm a full-stack web developer
          </h2>
          <button
            onClick={() => window.scrollTo(0, scrollingPosition.projects)}
          >
            View my work
          </button>
        </div>
      </div>
      <nav id='nav'>
        <ul>
          <li
            className={active == 'home' ? 'active' : null}
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </li>
          <li
            className={active == 'about' ? 'active' : null}
            onClick={
              scrollingPosition.about
                ? () => window.scrollTo(0, scrollingPosition.about)
                : null
            }
          >
            About
          </li>
          <li
            className={active == 'projects' ? 'active' : null}
            onClick={
              scrollingPosition.projects
                ? () => window.scrollTo(0, scrollingPosition.projects)
                : null
            }
          >
            Projects
          </li>
          <li
            className={active == 'contact' ? 'active' : null}
            onClick={
              scrollingPosition.contact
                ? () => window.scrollTo(0, scrollingPosition.contact)
                : null
            }
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
