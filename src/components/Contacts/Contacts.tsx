import * as React from "react";

import arrowUp from '../../assets/images/icon-arrow-up.svg';
import soundcloud from '../../assets/images/soundcloud.svg';
import behance from '../../assets/images/behance.svg';
import vimeo from '../../assets/images/vimeo.svg';
import bandcamp from '../../assets/images/bandcamp.svg';
import facebook from '../../assets/images/facebook.svg';
import vk from '../../assets/images/vk.svg';
import instagram from '../../assets/images/instagram.svg';

import { StyledContactsPage } from './styles';


const socialLinks = [
  {
    name: 'soundcloud',
    href: 'https://soundcloud.com/stolen-forest',
    img: soundcloud 
  },
  {
    name: 'behance',
    href: '',
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


interface Props {
  navigationClick: (e: any) => void;
}

const Contacts: React.FunctionComponent<Props> = ({navigationClick}: Props) =>  {
  return (
    <StyledContactsPage id="contacts" className="page">
      {/*
      //eslint-disable-next-line */}
      <a href="#portfolio" className="link-to-section up" onClick={navigationClick}>
        <img src={arrowUp} alt="up" />
        <span className="link-text">UP</span>
      </a>

      <div className="page-content-wrapper">
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
            {/*
            //eslint-disable-next-line */}
            telegram: <a href="https://t.me/humanramen">@humanramen</a>
          </p>
          <p>
            {/*
            //eslint-disable-next-line */}
            vk: <a href="https://vk.com/stolenforest">/unwritten</a>
          </p>
        </div>

        <ul className="social-list">
          {socialLinks.map((item, key) => (
            <li key={key}>
                {/*
                //eslint-disable-next-line */}
                <a href={item.href} data-name={item.name}>
                    <img src={item.img} alt="behance" />
                </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledContactsPage>
  );
}

export {Contacts}