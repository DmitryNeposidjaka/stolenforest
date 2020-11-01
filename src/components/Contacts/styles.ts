import styled from 'styled-components';

export const StyledContactsPage = styled.section`
  .page-content-wrapper {
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
