import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';

export const FilterByStarsContainer = styled.div `
    margin: 1rem .2rem 0 .2rem;
    background: black;
    padding-bottom: 1rem;
    border-radius: .4rem;
    position: relative;

    & p {
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        padding: .7rem 0 .5rem 1rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        margin: 1rem 2rem;

        & p {
            font-size: 1.4rem;
        }
    }
    @media (max-width: 500px) {
        margin: 1rem .5rem;

        & p {
            font-size: 1.1rem;
        }
    }
`;

export const FilterByStarsElements = styled.div `
    width: 90%;
    height: 4rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 768px) {
        height: 6rem;
    }
`;

export const LinkElement = styled(Link) `
    text-decoration: none;
    color: white;
    width: 31%;
    margin: .4rem .1rem;
    border: 1px solid black;

    &:hover {
        background: black;
        border: 1px solid yellow;
        border-radius: 1rem;
        color: yellow;
        cursor: pointer;
    }

    &:hover {
        border: 1px solid yellow;
        border-radius: 1rem;
        color: yellow;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin: .65rem .1rem;
        font-size: 1.2rem;
        border: none;

        &:hover {
            border: none;
            color: white;
        }
    }
`;