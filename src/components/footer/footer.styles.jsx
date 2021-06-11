import styled from 'styled-components';

export const FooterContainer = styled.div `
   width:100%;
   height:5rem;
   background-color: ${ props => props.theme.footer.background};
   display: flex;
   align-items: center;
   justify-content: center;

   & p {
      color: ${ props => props.theme.footer.color};
      margin: 0;
   }
`;