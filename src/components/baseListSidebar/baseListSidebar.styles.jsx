import styled from 'styled-components';

export const BaseListSidebarContainer = styled.div `
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