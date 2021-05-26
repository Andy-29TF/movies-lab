import styled from 'styled-components';
//? import link from router to stylize the link
// import { Link } from 'react-router-dom';
// import icons
import { ReactComponent as MenuIcon} from '../../assets/icons/navbar/menu.svg';
import { ReactComponent as SearchIcon} from '../../assets/icons/navbar/search.svg';
import { ReactComponent as CloseIcon} from '../../assets/icons/navbar/close.svg';

export const MobileNavbarContainer = styled.div`
    display: none;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;

    & img {
        width: 9rem;
        display: none;
    }

    & .div-menu-icon {
        width: 4rem;
        height: 100%;
        text-align: center;    
    }

    @media (max-width: 768px) {
        display: flex;

        & img {
            display: block;
        }
    }
`;

export const NavbarMenuIcon = styled(MenuIcon)`
    display: none;
    fill: #F7F7FF;
    cursor: pointer;
    height: 100%;
    
    @media (max-width: 768px) {
        display: inline;
        width: 50% ;
    }
`;

export const NavbarSearchIcon = styled(SearchIcon)`
    display: none;
    width: 2.5rem;
    height: auto;
    fill: #F7F7FF;
    cursor: pointer;
    margin: 0 0.2rem 0 0.5rem;

    @media (max-width: 768px) {
        display: inline;
        width: 2rem;
    }
`;

export const NavbarCloseIcon = styled(CloseIcon)`
    display: none;  
    cursor: pointer;
    height: 100%;


    @media (max-width: 768px) {
        display: inline;
        width: 50% ;
    }

`;
