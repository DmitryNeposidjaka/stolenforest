import styled from 'styled-components';
import { animated } from 'react-spring';

export const StyledSwipeableViews = styled(animated.div)`
  width: 100vw;
  height: inherit;

  position: absolute;

  will-change: transform;
  user-select: none;
  cursor: grab;
`;
