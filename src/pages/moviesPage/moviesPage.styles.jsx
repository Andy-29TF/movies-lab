import styled from 'styled-components';
// import icon
import { ReactComponent as Settings } from '../../assets/icons/baseListSidebar/settings.svg';

export const MoviesPageContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: ${ props => props.theme.pages.background};
    flex-grow: 1;
    display: flex;
    position: relative;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const IconWrapper = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: none;

    @media (max-width: 768px) {
        display: ${props => props.displaySettingsIcon ? "none" : "block"};
    }
`;

export const SettingsIcon = styled(Settings) `
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    right: 0;
    top: 65%;
    width: 3rem;
    padding: .4rem;
    background: black;
    fill: #F7CE3E;
    border-radius: 1rem;
    cursor: pointer;
`;