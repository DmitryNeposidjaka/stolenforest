import styled from 'styled-components';

export const StyledProjectGroup = styled.div`
  height: inherit;

  padding: 0 var(--listPaddingLeftRight);

  display: grid;
  grid-gap: var(--listGap);
  grid-auto-flow: column;
  grid-auto-columns: var(--listItemSize);
  place-content: center flex-start;
  place-items: flex-start center;

  --cardWidth: var(--listItemSize);
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