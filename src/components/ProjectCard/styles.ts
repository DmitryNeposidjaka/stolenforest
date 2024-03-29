import styled from 'styled-components';

export const StyledProjectCard = styled.div`
  width: var(--cardWidth, 200px);
  height: max-content;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
  
  cursor: pointer;
  text-align: center;

  .project-name {
    height: 30px;

    color: #fff;
    opacity: 0.5;

    @media (max-width: 768px) {
      opacity: 1;
    }

    transition: opacity 0.15s ease-in-out;    
  }

  .item__image {
    width: 100%;
    height: var(--cardWidth, 200px);
    max-height: 50vh;

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

        @media (max-width: 768px) {
          filter: grayscale(0%);
        }

        transition: all 0.3s ease-in-out;
      }
    }
  }

  .item__text {
    p {
      font-size: 19px;
      color: #fff;
      opacity: 0.5;

      @media (max-width: 768px) {
        opacity: 1;
      }

      transition: opacity 0.15s ease-in-out;

      /* Show only 1 lines of text */
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      text-align: center;
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
