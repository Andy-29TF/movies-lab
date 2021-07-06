import styled from 'styled-components';

export const SearchBarContainer = styled.div `
    display: ${ props => props.displaySearchBar ? "block" : "none"};
    width: 100%;
    height: 4rem;
    background-color: ${ props => props.theme.components.searchBar.container.background};
    box-shadow: inset 1px 0 18px 0px ${ props => props.theme.components.searchBar.container.boxShadow};
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
    background-color: ${ props => props.theme.components.searchBar.input.background};
    border-radius: .5rem;
    padding-left: 1rem;
    border: 0;
    outline: 0;
    color: ${ props => props.theme.components.searchBar.input.color};
`;

export const SearchResultsList = styled.div `
    width: 100%;
    position: absolute;
    top: 4rem;
    margin: auto;
    background: ${ props => props.theme.components.searchBar.list.background};
    z-index: 2;

    & a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: ${ props => props.theme.components.searchBar.list.color};
        }
    }
`;

export const ItemSearched = styled.div`
    display: flex;
    margin: .5rem .7rem;
    text-align: center;
    & img {
        width: 5rem;
    }

    & p{
        color: ${ props => props.theme.components.searchBar.list.color};
        margin-left: 1.5rem;
        margin-top: .5rem;
    }
`;

export const LinkToSearchedItems = styled.div `
    margin: .9rem;

    & a {
        color: ${ props => props.theme.components.searchBar.link.color};
        font-size: 1.2rem;

        &:hover {
            color: ${ props => props.theme.components.searchBar.link.hoverColor};
        }
    }
`;