import styled from 'styled-components';


export const AppContainer = styled.div `
    font-family: 'Roboto', sans-serif;
    background: url(${props => props.theme.body.background === "dark" ? props.darkBackground : props.lightBackground}) center fixed;
`;