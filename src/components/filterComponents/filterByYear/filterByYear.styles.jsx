import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';

export const FilterByYearContainer = styled.div `
    margin: .2rem;
    background: black;
    padding-bottom: 1rem;
    border-radius: .4rem;

    & p {
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        padding: .7rem 0 .5rem 1rem;
        margin: 0;
    }
`;

export const FilterByYearElements = styled.div `
    width: 90%;
    height: 11.5rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    overflow-x: auto;

    &::-webkit-scrollbar-track {
        background: rgb(6,14,11);
        background: linear-gradient(90deg, rgba(6,14,11,1) 35%, rgba(255,215,0,1) 50%, rgba(6,14,11,1) 65%);
        width: 1px;
    }
    &::-webkit-scrollbar {
        width: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background: black;
        border: 2px solid yellow;
        border-radius: 1rem;
    }
`;

export const LinkElement = styled(Link) `
    text-decoration: none;
    color: white;
    width: 31%;
    margin: .4rem .1rem;

    &:hover {
        background: black;
        border: 1px solid yellow;
        border-radius: 1rem;
        color: yellow;
        cursor: pointer;
    }
`;