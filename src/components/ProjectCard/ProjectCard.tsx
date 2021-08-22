import * as React from "react";

/* Types */
import { Project } from '../../types';

/* Styles */
import { StyledProjectCard } from './styles';

type Props = Project;

const ProjectCard: React.FunctionComponent<Props> = ({
  name,
  link,
  tags = [],
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
        <a href={link} target="__blank">
          <img src={path.default} alt={name} />
        </a>
      </div>

      <div className="item__text">
        <p>{tags.join(' | ')}</p>
      </div>
    </StyledProjectCard>
  );
}

export { ProjectCard }