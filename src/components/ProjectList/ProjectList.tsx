import * as React from "react";
import splitEvery from 'ramda/src/splitEvery';
import { useDebouncedCallback } from 'use-debounce';

/* Types */
import { Project } from '../../types';

/* Components */
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SwipeableViews } from '../SwipeableViews/SwipeableViews';

/* Styled */
import { StyledProjectGroup, StyledNextButton, StyledBackButton } from './styles';

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
  return (
    <SwipeableViews 
      config={listConfig} 
      renderControls={({ activeViewIndex, viewsCount, changeViewIndex }) => (
        <>
          {activeViewIndex !== 0 && (
            <StyledBackButton onClick={() => changeViewIndex(activeViewIndex - 1)}>
              &#10147;
            </StyledBackButton>
          )}

          {activeViewIndex !== viewsCount - 1 && (
            <StyledNextButton onClick={() => changeViewIndex(activeViewIndex + 1)}>
              &#10147;
            </StyledNextButton>
          )}
        </>
      )}
    >
      {({ listDimensions }) => splitEvery(listDimensions.itemsCount, data).map((itemsGroup, key) => (
        <StyledProjectGroup key={key} style={{
          //@ts-ignore
            '--itemsCount': listDimensions.itemsCount, 
            '--listPaddingLeftRight': `${listConfig.paddingLeftRight}px`,
            '--listGap': `${listConfig.gap}px`,
            '--listItemSize': `${
              (listDimensions.width - listDimensions.itemsCount * listConfig.gap) 
              / listDimensions.itemsCount
            }px`,
        }}>
          {itemsGroup.map((props, key) => (
            <ProjectCard key={key} {...props} />
          ))}
        </StyledProjectGroup>
      ))}
    </SwipeableViews>
  );
}

export {ProjectList}