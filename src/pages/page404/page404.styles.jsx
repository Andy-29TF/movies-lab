import styled from "styled-components/macro";

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.pages.background};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${ props => props.theme.pages.page404.color};
  text-align: center;

  & h1 {
      font-size: 4.5rem;
      margin: 0;
  }

  & h4 {
      font-size: 2rem;
      margin: 1rem 0 2rem 0;
  }

  & h2 {
      margin: 1.5rem .5rem;
  }

  & p {
    font-size: 1.3rem;

    & a {
        color: ${ props => props.theme.pages.page404.link};
    }
  }

  & img {
    @media (max-width: 500px) {
        width: 98%;
    }
  }
`;