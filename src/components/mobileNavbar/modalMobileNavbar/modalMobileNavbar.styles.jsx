import styled, {keyframes} from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';

const modalAnimation = keyframes`
from{
    clip-path: circle(8rem at 98% -10%);
}
to{
    clip-path: circle(80rem at 98% -10%);
}
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 4.3rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4.3rem);
    background-color: ${ props => props.theme.header.mobileNavbar.modal.background};
    z-index: 1;
    display: ${(props)=> props.displayModal ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-around;
    animation: ${modalAnimation} 1s ease-out;
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