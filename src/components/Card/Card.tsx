import * as React from "react";

import { StyledProjectCard } from './styles';

interface Props {
  name: string;
  link: string;
  tags: string[];
  imageName: string;
}

const Card: React.FunctionComponent<Props> = ({
  name,
  link,
  tags,
  imageName
}: Props) => {
 const path = require(`./../../assets/images/${imageName}`)

  return (
    <StyledProjectCard className="item">
      <p className="project-name">
        {name}
      </p>

      <div className="item__image">
        {/*
        //eslint-disable-next-line */}
        <a href={link} target="__bank">
          <img src={path.default} alt="Startup Village" />
        </a>
      </div>

      <div className="item__text">
        <p>{tags.join(' | ')}</p>
      </div>
    </StyledProjectCard>
  );
}

export { Card }