import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.jpg';

export const Main = createGlobalStyle`
  :root {
    --screenHeight: calc(var(--vh, 1vh) * 100);
  }

  #root {
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    position: relative;
    overflow-y: hidden;
  }

  #header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    padding-top: 10px;

    @media (min-width: 768px) {
      padding-top: 40px;
    }


    .logo {
      display: block;
      max-width: 90px;
      margin: 0 auto;

      @media (min-width: 768px) {
        margin: 0 50px 0 auto;
        max-width: 130px;
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

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
  }

  h1, 
  h2, 
  h3, 
  h4,
  h5,
  h6, 
  b,
  p,
  span { 
    margin: 0;
    font-weight: normal;
    line-height: 125%;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }

  h5 {
    font-size: 19px;
  }

  section.page {
    width: 100%;
    height: var(--screenHeight);
    min-height: var(--screenHeight);

    display: grid;
    place-content: center;

    position: relative;

    .page-content-wrapper {
      width: 100%;
      height: max-content;
      overflow-x: scroll;
    }

    .project-list {
      padding: 0 32px;

      display: grid;
      grid-auto-flow: column;
      grid-gap: 24px;
      align-items: flex-start;

      &::after {
        content: '';
        width: 16px;
        height: 100%;
      }
    }
  }


  @keyframes bounce-up {
    50% {
      transform: translateY(-12px);
    }
  }

  @keyframes bounce-down {
    50% {
      transform: translateY(12px);
    }
  }


  a {
    text-decoration: none;
    color: #fff;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }

    &.link-to-section {
      left: 50%;
      z-index: 10;
      position: absolute;
    
      transform: translateX(-50%);

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      font-size: 18px;
      text-transform: uppercase;

      img {
        width: 22px;
      }

      &.up {
        top: 30px;

        img {
          animation: bounce-up 1.2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }

      &.down {
        bottom: 30px;
      
        img {
          animation: bounce-down 1.2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
  }
`;
