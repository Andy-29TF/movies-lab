import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';
// import icon
import { ReactComponent as ScrollUpAndDown } from '../../../assets/icons/baseListSidebar/scrollUpAndDown.svg';

export const FilterByYearContainer = styled.div `
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

export const ScrollUpAndDownIcon = styled(ScrollUpAndDown) `
    fill: white;
    width: 1rem;
    position: absolute;
    top: .8rem;
    right: .48rem;

    @media (max-width: 768px) {
        right: 1.1rem;
        top: 1rem;
    }
`;

export const FilterByYearElements = styled.div `
    width: 90%;
    height: 12rem;
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