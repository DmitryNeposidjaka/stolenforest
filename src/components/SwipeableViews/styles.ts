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

  padding: 0;
  cursor: pointer;
  
  display: grid;
  place-content: center;

  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  
  color: #fff;
  font-size: 40px;


  border: none;
  border-radius: 50%;
  background: transparent;
  box-shadow: none;
  text-shadow: 2px 3px 2px #000000, 2px -2px 2px black;
`

export const StyledNextButton = styled(StyledControlsButton)`
  right: 6px;
`

export const StyledBackButton = styled(StyledControlsButton)`
  left: 6px;
  transform: scale(-1) translateY(24px);
`