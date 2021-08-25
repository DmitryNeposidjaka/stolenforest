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
  width: auto;
  height: auto;

  padding: 0;
  cursor: pointer;
  
  display: grid;
  place-content: center;

  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  
  color: #fff;
  font-size: 24px;

  border: none;
  border-radius: 50%;
  background: transparent;
  box-shadow: none;
  text-shadow: 1px 1px 1px #00f3ff;

  &:disabled {
    opacity: 0.3;
  }
`

export const StyledNextButton = styled(StyledControlsButton)`
  right: 16px;
  transform: scaleX(1.2) scaleY(2.5);
`

export const StyledBackButton = styled(StyledControlsButton)`
  left: 16px;
  transform: scaleX(-1.2) scaleY(2.5);
`