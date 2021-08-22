import styled from 'styled-components';
import { animated } from 'react-spring';

export const StyledSwipeableViews = styled(animated.div)`
  width: 100vw;
  height: inherit;

  position: absolute;

  will-change: transform;
  touch-action: pan-y;
  user-select: none;
  cursor: grab;
`;

const StyledControlsButton = styled.button`
  width: 50px;
  height: 50px;

  display: grid;
  place-content: center;

  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  
  color: #fff;
  font-size: 50px;

  border: none;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 0px 0px 2px 5px #000000;
  text-shadow: 1px 2px 2px #ef3de1;
`

export const StyledNextButton = styled(StyledControlsButton)`
  right: 16px;
`

export const StyledBackButton = styled(StyledControlsButton)`
  left: 16px;
`