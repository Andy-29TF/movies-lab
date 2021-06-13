import styled from 'styled-components';
import { ReactComponent as Close} from '../../assets/icons/baseListSidebar/closeII.svg';

export const BaseListSidebarContainer = styled.div `
    position: relative;
    width: 16rem;
    background-color: ${ props => props.theme.pages.moviesPage.baseListSidebar.background};
    color: ${ props => props.theme.pages.moviesPage.baseListSidebar.color};
   
    @media (max-width: 768px) {
        position: absolute;
        width: 100%;
        top: -4.5rem;
        height: 100vh;
        overflow-x: auto;
        display: ${ props => props.displayFilterSettings ? "block" : "none"};
    }
`;

export const FilterList = styled.div `
    width: auto;
    height: auto;

    @media (max-width: 768px) {
        margin: 1.5rem 0;
    }
    @media (max-width: 500px) {
        margin: .7rem 0;
    }
`;

export const CloseIcon = styled(Close)`
    display: none;
    width: 2rem;
    cursor: pointer;
    margin: .6rem .6rem .4rem auto;
    fill: black;

    @media (max-width: 768px) {
        display: block;
    }
`;