import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
    position: absolute;
    top: 4.3rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4.3rem);
    background-color: ${ props => props.theme.header.mobileNavbar.modal.background};
    z-index: 2;
    display: ${(props)=> props.displayModal ? "flex" : "none"};
    flex-direction: column;

    & #container-for-links {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    & > button {
        margin: .5rem .5rem .5rem auto;
    }
`;

export const ModalLink = styled(Link)`
    color: ${ props => props.theme.header.mobileNavbar.modal.link.color};
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    &:visited,
    &:active {
        text-decoration: none;
        color: ${ props => props.theme.header.mobileNavbar.modal.link.color};
    }
`;