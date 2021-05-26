import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';


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
`;

export const ModalLink = styled(Link)`
    color: #F7F7FF;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
`;