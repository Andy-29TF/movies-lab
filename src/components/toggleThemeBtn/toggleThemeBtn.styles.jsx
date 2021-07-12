import styled from 'styled-components';

export const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.components.toggleThemeBtn.gradient};
  width: 4rem;
  height: 2.1rem;
  margin: 0 .5rem;
  border-radius: 1.9rem;
  border: 2px solid ${({ theme }) => theme.components.toggleThemeBtn.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 1.45rem;
    height: auto;
    transition: all 0.3s linear;
    margin: 0 .15rem !important;

    &:first-child {
      transform: ${({ theTypeOfTheCurrentTheme }) => theTypeOfTheCurrentTheme === "light" ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ theTypeOfTheCurrentTheme }) => theTypeOfTheCurrentTheme === "light" ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;