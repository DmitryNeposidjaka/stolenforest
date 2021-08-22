import styled from 'styled-components';

/* Components */
import { SwipeableViews } from '../SwipeableViews/SwipeableViews';

export const StyledProjectSwipeableViews = styled(SwipeableViews)`
  div.project-group {
    height: inherit;

    padding: 0 var(--listPaddingLeftRight);

    display: grid;
    grid-gap: var(--listGap);
    grid-auto-flow: column;
    grid-auto-columns: var(--listItemSize);
    place-content: center flex-start;
    place-items: flex-start center;

    --cardWidth: var(--listItemSize);
  }
`;

