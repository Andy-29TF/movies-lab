import styled from 'styled-components';


export const SearchBarContainer = styled.div `
    display: ${ props => props.displaySearchBar ? "block" : "none"};
    width: 100%;
    height: 4rem;
    background-color: #0e241c;
    box-shadow: inset 1px 0 18px 0px #000000;
`;

export const SearchBarBox = styled.div `
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    position: relative;
`;

export const SearchInput = styled.input `
    width: 96%;
    height: 60%;
    margin: auto;
    background-color: #3d413f;
    border-radius: .5rem;
    padding-left: 1rem;
    border: 0;
    outline: 0;
    color: white;
`;

export const SearchResultsList = styled.div `
    position: absolute;
    top: 4rem;
    margin: auto;
    background: red;
    z-index: 2;
`;