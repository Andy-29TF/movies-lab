import styled from 'styled-components';
// import icon
import { ReactComponent as Settings } from '../../assets/icons/baseListSidebar/settings.svg';

export const BaseListSidebarContainer = styled.div `
    position: relative;
    width: 16rem;
    background-color: ${ props => props.theme.pages.moviesPage.baseListSidebar.background};
    color: ${ props => props.theme.pages.moviesPage.baseListSidebar.color};
   
    @media (max-width: 768px) {
        /* position: absolute;
        top: 0;
        width: 100%;
        height: 100%; */
        display: none;
    }
`;

export const FilterList = styled.div `
    width: auto;
    height: auto;
`;

export const SettingsIcon = styled(Settings) `
    position: absolute;
    right: 0;
    bottom: 20%;
    width: 10rem;
`;