import * as React from "react";
/* Components */
import { Card } from "../../components/Card/Card";

/* Assets */
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import arrowUp from '../../assets/images/icon-arrow-up.svg';

interface Props {
  data: {
    name: string; 
    link: string; 
    tags: string[]
  }[];
  navigationClick: (e: any) => void;
}

const Fun: React.FunctionComponent<Props> = ({ data, navigationClick }: Props) => {
    return (
    <section id="fun" className="page">

      {/*
      //eslint-disable-next-line */}
      <a href="#portfolio" className="link-to-section up" onClick={navigationClick}>
        <img src={arrowUp} alt="up" />
        <span className="link-text">Portfolio</span>
      </a>

      {/*
      //eslint-disable-next-line */}
      <a href="#contacts" className="link-to-section down" onClick={navigationClick}>
        <span className="link-text">Contacts</span>
        <img src={arrowDown} alt="down" />
      </a>

      <div className="page-content-wrapper">
        <div className="project-list">
          {data.map((item, key) => (
            <Card name={item.name} link={item.link} tags={item.tags} key={key}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export {Fun}