import * as React from 'react';

/* Components */
import { ProjectList } from "./components/ProjectList/ProjectList";

/* Assets */
import { projects } from './constants/projects'

import logo from "./assets/logo.svg";
import soundcloud from './assets/social-icons/soundcloud.svg';
import behance from './assets/social-icons/behance.svg';
import vimeo from './assets/social-icons/vimeo.svg';
import bandcamp from './assets/social-icons/bandcamp.svg';
import facebook from './assets/social-icons/facebook.svg';
import vk from './assets/social-icons/vk.svg';
import instagram from './assets/social-icons/instagram.svg';

const socialLinks = [
  {
    name: 'soundcloud',
    href: 'https://soundcloud.com/stolen-forest',
    img: soundcloud 
  },
  {
    name: 'behance',
    href: 'https://www.behance.net/stolentiqstudio',
    img: behance
  },
  {
    name: 'vimeo',
    href: 'https://vimeo.com/stolentiq',
    img: vimeo
  },
  {
    name: 'bandcamp',
    href: 'https://stolenforest.bandcamp.com/',
    img: bandcamp
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/stolentiqstudio',
    img: facebook
  },
  {
    name: 'vk',
    href: 'https://vk.com/stolenforest',
    img: vk
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/stolentiq_studio',
    img: instagram
  }
];

const App = React.memo(() => {
  const handleSmoothScroll = React.useCallback((e: any) => {
    e.preventDefault();

    const scrollToSelector = e.currentTarget.getAttribute('href');

    document.querySelector(scrollToSelector).scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
   <>
      <header id="header">
        <img src={logo} alt='STOLENTIQ STUDIO' className="logo" />
      </header>

      <section id="portfolio" className="page">
        {/*
        //eslint-disable-next-line */}
        <a href="#fun" className="link-to-section down" onClick={handleSmoothScroll}>
          <span className="link-text">
            FUN 
          </span>
        </a>

        <ProjectList data={projects.portfolio} />
      </section>

      <section id="fun" className="page">

        {/*
        //eslint-disable-next-line */}
        <a href="#portfolio" className="link-to-section up" onClick={handleSmoothScroll}>
          <span className="link-text">Portfolio</span>
        </a>

        {/*
        //eslint-disable-next-line */}
        <a href="#contacts" className="link-to-section down" onClick={handleSmoothScroll}>
          <span className="link-text">Contacts</span>
        </a>

        <ProjectList data={projects.fun} />
      </section>

      <section id="contacts" className="page">
        {/*
        //eslint-disable-next-line */}
        <a href="#portfolio" className="link-to-section up" onClick={handleSmoothScroll}>
          <span className="link-text">UP</span>
        </a>

        <div className="contacts-page-wrapper">
          <p className="descripton">
            We provide original music and sound design for films, animation,
            motion graphics, TV, commercial and games!
          </p>
          
          <div className="main-links-wrapper">
            <p>
              e-mail:{' '}
              <a href="mailto:stolenforest@gmail.com">
                stolenforest@gmail.com
              </a>
            </p>
            <p>
              telegram: <a href="https://t.me/humanramen">@humanramen</a>
            </p>
            <p>
              vk: <a href="https://vk.com/unwritten">/unwritten</a>
            </p>
          </div>

          <ul className="social-list">
            {socialLinks.map((item, key) => (
              <li key={key}>
                  <a href={item.href} data-name={item.name}>
                    <img src={item.img} alt={item.name} />
                  </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
   </>
  );
})

export { App };
