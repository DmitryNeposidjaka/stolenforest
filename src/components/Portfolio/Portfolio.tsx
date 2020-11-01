import * as React from "react";

/* Components */
import { Card } from "../../components/Card/Card";

/* Assets */
import arrowDown from '../../assets/images/icon-arrow-down.svg';

interface Props {
  data: {
    name: string; 
    link: string; 
    tags: string[]
  }[];

  navigationClick: (e: any) => void;
}

const Portfolio: React.FunctionComponent<Props> = ({ data, navigationClick }: Props) => {
  return (
    <section id="portfolio" className="page">
      <a href="#fun" className="link-to-section down" onClick={navigationClick}>
        <span className="link-text">FUN</span>
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
}

export {Portfolio}