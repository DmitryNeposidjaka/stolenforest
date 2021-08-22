import { createGlobalStyle } from 'styled-components';

export const Main = createGlobalStyle`
  :root {
    --screenHeight: calc(var(--vh, 1vh) * 100);
  }

  #root {
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  #header {
    width: 100%;
    padding: 16px;

    top: 0;
    left: 0;
    position: absolute;

    display: grid;
    place-items: center;

    @media (min-width: 768px) {
      place-items: flex-end;
    }

    .logo {
      max-width: 15vmax;

      @media (min-width: 768px) {
        max-width: 15vmin;
      }
    }
  }

  html {
    box-sizing: border-box;
      
    *, *::before, *::after {
      box-sizing: inherit;
    }
  }

  body {
    width: 100%;
    min-width: 320px;
    
    margin: 0;
    overflow: hidden;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #fff;
    font: 16px/1.2 'Abel', Arial, sans-serif;

    background-color: black;
  }

  h1, 
  h2, 
  h3, 
  h4,
  h5,
  h6, 
  p,
  span { 
    margin: 0;
    font-weight: normal;
    line-height: 125%;
  }

  section.page {
    width: 100%;
    height: var(--screenHeight);
    min-height: var(--screenHeight);

    position: relative;

    display: grid;
    place-content: center;
  }

  a {
    text-decoration: none;
    color: #fff;

    &.link-to-section {
      left: 50%;
      z-index: 10;
      position: absolute;
      transform: translateX(-50%);

      font-size: 18px;
      text-align: center;
      text-transform: uppercase;

      span.link-text {
        text-align: center;
        display: grid;
        place-content: center;

        &::before,
        &::after {
          display: block;
          
          place-self: center;

          font-size: 24px;
          text-shadow: 1px 1px 1px #ef3de1;
        }
      }

      &.up {
        top: 30px;
      }

      &.down {
        bottom: 30px;
      }

      &[href="#fun"] {
        span.link-text::after {
          content: '\\27A3';
          transform: rotate(90deg) scaleY(4.6);
        }
      }

      &[href="#portfolio"] {
        span.link-text::before {
          content: '\\2933';
          transform: scaleX(-5) translateX(-1px) rotate(-90deg);
        }
      }

      &[href="#contacts"] {
        span.link-text::after {
          content: '\\21AF';
          transform: scaleX(6);
        }
      }
    }
  }

  div.contacts-page-wrapper {
    padding: 0 24px;

    display: grid;
    grid-gap: 40px;
    grid-template-columns: minmax(auto, 80%) minmax(auto, 20%);
    grid-template-areas: 'descripton social-list' 'main-links social-list';

    p.descripton {
      grid-area: descripton;
      align-self: flex-start;
    }

    .main-links-wrapper {
      grid-area: main-links;
      align-self: flex-end;
    }

    .social-list {
      width: 36px;

      grid-area: social-list;
      justify-self: flex-end;

      display: grid;
      grid-gap: 8px;

      margin: 0;
      padding: 0;
      list-style: none;

      li {
        overflow: hidden;

        a {
          width: 100%;
          display: inline-flex;
          align-items: center;
          position: relative;

          img {
            width: 100%;
            opacity: 0.5;
          }

          &:hover {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
