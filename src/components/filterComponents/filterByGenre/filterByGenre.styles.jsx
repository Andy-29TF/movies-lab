import styled from 'styled-components';
//? import link from router to stylize the link
import { Link } from 'react-router-dom';
// import icon
import { ReactComponent as ScrollUpAndDown } from '../../../assets/icons/baseListSidebar/scrollUpAndDown.svg';

export const FilterByGenreContainer = styled.div `
    margin: 1rem .2rem 0 .2rem;
    background: ${ props => props.theme.components.baseListSidebar.black};
    padding-bottom: 1rem;
    border-radius: .4rem;
    position: relative;

    & p {
        font-weight: 600;
        color: ${ props => props.theme.components.baseListSidebar.white};
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
    fill: ${ props => props.theme.components.baseListSidebar.white};
    width: 1rem;
    position: absolute;
    top: .8rem;
    right: .48rem;

    @media (max-width: 768px) {
        right: 1.1rem;
        top: 1rem;
    }
`;

export const FilterByGenreElements = styled.div `
    width: 90%;
    height: 12rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    overflow-x: auto;

    &::-webkit-scrollbar-track {
        background: ${ props => props.theme.components.baseListSidebar.scrollbar.black};
        background: ${ props => props.theme.components.baseListSidebar.scrollbar.track};
        width: 1px;
    }
    &::-webkit-scrollbar {
        width: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background: ${ props => props.theme.components.baseListSidebar.scrollbar.black};
        border: 2px solid ${ props => props.theme.components.baseListSidebar.scrollbar.yellow};
        border-radius: 1rem;
    }
`;

export const LinkElement = styled(Link) `
    text-decoration: none;
    color: ${ props => props.theme.components.baseListSidebar.white};
    margin: .35rem .3rem;
    padding: 0 .2rem;
    border: 1px solid ${ props => props.theme.components.baseListSidebar.black};
    text-transform: ${props => props.deletedecorations === "yes" ? null : "lowercase"};

    &:hover {
        border: 1px solid ${ props => props.theme.components.baseListSidebar.yellow};
        border-radius: 1rem;
        color: ${ props => props.theme.components.baseListSidebar.yellow};
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin: .5rem .8rem;
        font-size: 1.3rem;
        border: none;

        &:hover {
            border: none;
            color: ${ props => props.theme.components.baseListSidebar.white};
        }
    }
    @media (max-width: 500px) {
        margin: .7rem .65rem;
        font-size: 1.2rem;
    }
`;