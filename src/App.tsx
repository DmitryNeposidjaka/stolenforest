import * as React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import isEmpty from 'ramda/src/isEmpty';

/* Components */
import { ProjectList } from "./components/ProjectList/ProjectList";
import { SwipeableViews } from './components/SwipeableViews/SwipeableViews';

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

if (isEmpty(history.state)) {
  history.pushState({
    ...history.state,
    app: 0,
    portfolio: 0,
    fun: 0
  }, '');
}

const App = React.memo(() => {
  return (
    <SwipeableViews 
      name="app"
      axis="y" 
      onIndexChange={i => 
        history.pushState({ 
          ...history.state,
          app: i 
        }, '')
      }
    >
      {({ activeViewIndex, changeViewIndex }) => (
        <>
          <section id="portfolio" className="page">
            <img 
              id="stolentiq-logo" 
              src={logo} 
              alt='STOLENTIQ STUDIO LOGO'
            />

            {/*
            //eslint-disable-next-line */}
            <a href="#fun" className="link-to-section down" 
              onClick={(e: any) => { 
                e.preventDefault(); 
                changeViewIndex(activeViewIndex + 1)
              }}
            >
              <span className="link-text">
                FUN 
              </span>
            </a>

            <ProjectList name="portfolio" data={projects.portfolio} />
          </section>

          <section id="fun" className="page">

            {/*
            //eslint-disable-next-line */}
            <a href="#portfolio" className="link-to-section up" 
              onClick={(e: any) => { 
                e.preventDefault(); 
                changeViewIndex(activeViewIndex - 1)
              }}
            >
              <span className="link-text">Portfolio</span>
            </a>

            {/*
            //eslint-disable-next-line */}
            <a href="#contacts" className="link-to-section down" 
              onClick={(e: any) => { 
                e.preventDefault(); 
                changeViewIndex(activeViewIndex + 1)
              }}
            >
              <span className="link-text">Contacts</span>
            </a>

            <ProjectList name="fun" data={projects.fun} />
          </section>

          <section id="contacts" className="page">
            {/*
            //eslint-disable-next-line */}
            <a href="#portfolio" className="link-to-section up"  
              onClick={(e: any) => { 
                e.preventDefault(); 
                changeViewIndex(0)
              }}
            >
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
      )}
    </SwipeableViews>
  );
})

export { App };
