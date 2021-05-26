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
        margin: 0 0.5rem 0 0.2rem;
    }

    & .navbar-left-side, .navbar-right-side {
        height: 100%;
        display: flex;
        align-items: center;
    }


    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavbarLink = styled(Link)`
    position: relative;
    color: #F7F7FF;
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
        background-color: #F7F7FF;
        left: 0;
        top: -1.25rem;
        transition: all 0.5s;
    }  
    &:after{
        position: absolute;
        content: "";
        height: 1.5rem;
        width: 0;
        background-color: #F7F7FF;
        right: 0;
        bottom: -1.27rem;
        transition: all 0.4s;
    }

    &:hover {
        color: #0A1612;
        background-color: #F7F7FF;
    }


    &:hover:before,
    &:hover:after{
        width: 100%;
    }
    
`;

export const NavbarSearchIcon = styled(SearchIcon)`
    width: 2.5rem;
    height: auto;
    fill: #F7F7FF;
    cursor: pointer;
    margin: 0 0.2rem 0 1rem;
    transition: all 0.4s;

    &:hover{
        transform: rotate(-45deg) scale(1.2);
        fill: #F7CE3E;
    }

    @media (max-width: 768px) {
        width: 2rem;
    }
`;