import styled from 'styled-components';

export const HeaderContainer = styled.div `
   width: 100%;
   height: 4.8rem; 
   background-color: ${ props => props.theme.header.background};

   & .mobile-navbar {
       display: none;
   }

   @media (max-width: 768px) {
        height: 4.5rem; 
    }
`;
