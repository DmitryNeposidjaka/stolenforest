import * as React from "react";
import splitEvery from 'ramda/src/splitEvery';
import { useDebouncedCallback } from 'use-debounce';

/* Types */
import { Project } from '../../types';

/* Components */
import { ProjectCard } from "../ProjectCard/ProjectCard";

/* Styled */
import { StyledProjectSwipeableViews } from './styles';

type Props = {
  data: Project[];
}

const listConfig = {
  defaultItemSize: 300,
  paddingLeftRight: 40,
  gap: 24,
  get correction() {
    return 2 * this.paddingLeftRight - this.gap
  } 
};

const ProjectList: React.FunctionComponent<Props> = ({ data }: Props) => {
  const [listDimensions, setDimensions] = React.useState({
    width: window.innerWidth - listConfig.correction,
    itemsCount: Math.floor((window.innerWidth - listConfig.correction) / listConfig.defaultItemSize) 
  });

  const debouncedCallback = useDebouncedCallback(
    (vw: number, vh: number) => {
      const width = vw - listConfig.correction;
      const itemsCount = Math.floor(width / listConfig.defaultItemSize);
      
      setDimensions({
        width,
        itemsCount: itemsCount <= 0 ? 1 : itemsCount
      });
    },
    500
  );
  
  React.useEffect(() => {
    const resizeHandler = _ => {
      debouncedCallback(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <StyledProjectSwipeableViews
      width={listDimensions.width} 
      style={{ 
        //@ts-ignore
        '--itemsCount': listDimensions.itemsCount, 
        '--listPaddingLeftRight': `${listConfig.paddingLeftRight}px`,
        '--listGap': `${listConfig.gap}px`,
        '--listItemSize': `${
          (listDimensions.width - listDimensions.itemsCount * listConfig.gap) 
          / listDimensions.itemsCount
        }px`
      }}
    >
      {splitEvery(listDimensions.itemsCount, data).map((itemsGroup, key) => (
        <div key={key} className="project-group">
          {itemsGroup.map((props, key) => (
            <ProjectCard key={key} {...props} />
          ))}
        </div>
      ))}
    </StyledProjectSwipeableViews>
  );
}

export {ProjectList}