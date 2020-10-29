import * as React from "react";

import arrowUp from '../../assets/images/icon-arrow-up.svg';
import soundcloud from '../../assets/images/soundcloud.svg';
import behance from '../../assets/images/behance.svg';
import vimeo from '../../assets/images/vimeo.svg';
import bandcamp from '../../assets/images/bandcamp.svg';
import facebook from '../../assets/images/facebook.svg';
import vk from '../../assets/images/vk.svg';
import instagram from '../../assets/images/instagram.svg';

const Contacts: React.FC = (): JSX.Element =>  {
    return (
        <section className="full-height contact-section" id="contacts">
            <div className="full-height-inner">
                <a href="#portfolio" className="link-to-section up">
                    <img src={arrowUp} alt="up" />
                    <span className="link-text">UP</span>
                </a>
                <div className="contact-holder">
                    <div className="contacts">
                        <h2>
                            We provide original music and sound design for films, animation,
                            motion graphics, TV, commercial and games!
                        </h2>
                        <div className="links">
                            <p>
                                e-mail:{' '}
                                <a href="mailto:stolenforest@gmail.com">
                                    stolenforest@gmail.com
                                </a>
                            </p>
                            <p>
                                telegram: <a href="#">@humanramen</a>
                            </p>
                            <p>
                                vk: <a href="#">/unwritten</a>
                            </p>
                        </div>
                    </div>
                    <ul className="social-list">
                        <li>
                            <a href="#">
                                <img src={ soundcloud } alt="soundcloud" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ behance } alt="behance" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ vimeo } alt="vimeo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ bandcamp } alt="bandcamp" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ facebook } alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ vk } alt="vk" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={ instagram } alt="instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export {Contacts}