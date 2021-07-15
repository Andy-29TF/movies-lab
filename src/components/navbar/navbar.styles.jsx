import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';
// import icon
import { ReactComponent as SearchIcon} from '../../assets/icons/navbar/search.svg';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;

    & img {
        width: 11rem;
        margin: 0 .5rem 0 .5rem;
    }

    & .navbar-left-side, .navbar-right-side {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

export const NavbarLink = styled(Link)`
    position: relative;
    color: ${ props => props.theme.header.navbar.link.color};
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0 0.5rem;
    margin: 0 0.02rem;
    transition: all 0.5s;

    &:before {
        position: absolute;
        content: "";
        height: 1.5rem;
        width: 0;
        background-color: ${ props => props.theme.header.navbar.link.hover.background};
        right: 0;
        top: -1.25rem;
        transition: all 0.5s;
    }  
    &:after{
        position: absolute;
        content: "";
        height: 1.5rem;
        width: 0;
        background-color: ${ props => props.theme.header.navbar.link.hover.background};
        left: 0;
        bottom: -1.27rem;
        transition: all 0.4s;
    }

    &:hover {
        color: ${ props => props.theme.header.navbar.link.hover.color};
        background-color: ${ props => props.theme.header.navbar.link.hover.background};
    }

    &:hover:before,
    &:hover:after{
        width: 100%;
    }
    
`;

export const NavbarSearchIcon = styled(SearchIcon)`
    width: 2.5rem;
    height: auto;
    fill: ${ props => props.searchbarstatus === "true" ? props.theme.header.navbar.searchIcon.hover.fill :  props.theme.header.navbar.searchIcon.fill};
    cursor: pointer;
    margin: ${ props => props.searchbarstatus === "true" ? "0 1.5rem 0 1rem" : "0 .5rem 0 1rem"};
    transition: all 0.4s;
    transform: ${ props => props.searchbarstatus === "true" ? "rotate(-45deg) scale(1.2)" : "rotate(0deg) scale(1)"};

    &:hover{
        fill: ${ props => props.searchbarstatus === "true" ? props.theme.header.navbar.searchIcon.fill : props.theme.header.navbar.searchIcon.hover.fill};
    }
`;