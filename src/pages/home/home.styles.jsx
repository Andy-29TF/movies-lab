import styled from 'styled-components';

export const HomeContainer = styled.div `
   width: 100%;
   height: 100%;
   background-color: ${ props => props.theme.pages.background};
   flex-grow: 1;
`;