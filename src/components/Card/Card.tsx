import * as React from "react";

import startupVillage from "../../assets/images/Startup-Village.png";

import { StyledProjectCard } from './styles';

interface Props {
  name: string; 
  link: string; 
  tags: string[];
}

const Card: React.FunctionComponent<Props> = ({
  name, 
  link, 
  tags
}: Props) => {
  return (
    <StyledProjectCard className="item">
      <p className="project-name">
        {name}
      </p>

      <div className="item__image">
        {/*
        //eslint-disable-next-line */}
        <a href="#" target="__bank">
          <img src={startupVillage} alt="Startup Village" />
        </a>
      </div>

      <div className="item__text">
        <p>{tags.join(' | ')}</p>
      </div>
    </StyledProjectCard>
  );
}

export { Card }