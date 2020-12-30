import * as React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Header } from './components/Header/Header';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Fun } from './components/Fun/Fun';
import { Contacts } from "./components/Contacts/Contacts";
import { Main } from './style/main';
import data from './data.json'

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
  /*const [data, setData] = React.useState({
      portfolio: [],
      fun: []
  });

  const getData = React.useCallback(async () => {
      try {
          const data = await fetch("/data.json")
          const responseValue = await (() => {
              if (data.ok) {
                  return data.json();
              } else {
                  //@ts-ignore`
                  throw new Error('Unsuccessful response');
              }
          })();
          setData(responseValue);
      } catch (e) {
          console.log(e)
      }
  }, []);*/

  React.useEffect(() => {
      //getData()
  }, [])

  const handleSmoothScroll = React.useCallback((e: any) => {
    const scrollToSelector = e.currentTarget.getAttribute('href');
    e.preventDefault();

    document.querySelector(scrollToSelector).scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Normalize />
      <Main />

      <Header/>

      <Portfolio data={data.portfolio} navigationClick={handleSmoothScroll}/>
      <Fun data={data.fun} navigationClick={handleSmoothScroll}/>
      <Contacts navigationClick={handleSmoothScroll}/>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
