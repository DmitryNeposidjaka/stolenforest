import * as React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';

/* Components */
import { App } from "./App";

/* Styles */
import { Main } from './style/main';

const setVhProperty = () =>
  document.documentElement.style.setProperty(
    '--vh',
    `${(window.innerHeight > window.screen.height ? window.screen.height : window.innerHeight) * 0.01}px`
  );

/* Set --vh custom property */
setVhProperty();

/* Update --vh custom property on resize and on orientationchange */
['resize', 'orientationchange'].forEach(event =>
  window.addEventListener(event, setVhProperty, false)
);

const Root: React.FC = () => {
  return (
    <>
      <Normalize />
      <Main />
      <App/>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
