import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  width: 200px;
  height: max-content;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  align-items: center;
  justify-items: center;
  
  cursor: pointer;
  text-align: center;

  .project-name {
    height: 30px;
    
    color: #f1f2f6;
    opacity: 0.5;
    transition: opacity 0.15s ease-in-out;    
  }

  .item__image {
    width: 100%;
    height: 200px;

    a {
      &:hover {
        opacity: 1;
      }
     
      img {
        width: 100%;
        height: 100%;

        margin: 0 auto;
        
        object-fit: cover;
        object-position: center;

        filter: grayscale(100%);
        transition: all 0.3s ease-in-out;
      }
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
