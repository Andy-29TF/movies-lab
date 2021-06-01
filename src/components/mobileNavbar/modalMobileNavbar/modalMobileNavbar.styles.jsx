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
    background-color: #0A1612;
    z-index: 1;
    display: ${(props)=> props.displayModal ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-around;
    animation: ${modalAnimation} 1s ease-out;
`;

export const ModalLink = styled(Link)`
    color: #F7F7FF;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    &:visited,
    &:active {
        text-decoration: none;
        color: #F7F7FF;
    }
`;