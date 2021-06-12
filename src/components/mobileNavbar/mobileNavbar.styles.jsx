import styled from 'styled-components';
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
    }

    & .div-menu-icon {
        width: 4rem;
        height: 100%;
        text-align: center;    
    }
`;

export const NavbarMenuIcon = styled(MenuIcon)`
    display: none;
    fill: ${ props => props.theme.header.mobileNavbar.menuIcon.fill};
    cursor: pointer;
    height: 100%;
    display: inline;
    width: 50%;
`;

export const NavbarSearchIcon = styled(SearchIcon)`
    display: none;
    width: 2.5rem;
    height: auto;
    fill: ${ props => props.theme.header.mobileNavbar.searchIcon.fill};
    cursor: pointer;
    margin: 0 .2rem 0 .6rem;
    display: inline;
    width: 2.1rem;
`;

export const NavbarCloseIcon = styled(CloseIcon)`
    display: none;  
    cursor: pointer;
    height: 100%;
    display: inline;
    width: 50%;
`;
