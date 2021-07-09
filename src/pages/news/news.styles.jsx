import styled from 'styled-components';

export const NewsPageContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: ${ props => props.theme.pages.background};
    flex-grow: 1;
    padding: 2rem 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;