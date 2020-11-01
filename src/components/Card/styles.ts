import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  width: 200px;
    
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
  
  cursor: pointer;
  text-align: center;

  .project-name {
    height: 40px;

    color: #f1f2f6;
    opacity: 0.5;
    transition: opacity 0.15s ease-in-out;    
  }

  .item__image {
    img {
      max-width: 150px;
      margin: 0 auto;
      filter: grayscale(100%);
      transition: all 0.3s ease-in-out;
    }
  }

  .item__text {
    p {
      font-size: 19px;
      color: #fff;
      opacity: 0.5;
      transition: opacity 0.15s ease-in-out;
    }
  }


  &:hover {
    .project-name {
      opacity: 1;
    }

    .item__image img {
      filter: grayscale(0);
    }

    .item__text p {
      opacity: 1;
    }
  }
`;
