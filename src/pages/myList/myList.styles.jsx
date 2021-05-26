import styled, { css } from 'styled-components';

export const MyListContainer = styled.div `
   width: 100%;
   height: 100%;
   background-color: #243942;
   flex-grow: 1;
`;

// ?  SectionBar
export const SectionBar = styled.div `
    position: relative;
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 3rem 2rem 0 2rem;

    &:before {
        content: "";
        width: 100%;
        height: .4rem;
        position: absolute;
        bottom: -.4rem;
        left: 0;
        background-color: #F7CE3E;

    }
    @media (max-width: 768px) {
        margin: 1.5rem .2rem 0 .2rem;
    }
`;

export const SectionSelectorUnselected = css `
    width: 32%;
    height: 3.5rem;
    display: flex;
    align-content: center;
    justify-content: center;
    margin:  0 .1rem;
    cursor: pointer;
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: #c5c1c0;
    transition: all ease .4s;

    & .section-bar-icon {
        width: 2.6rem;
        height: 2.6rem;
        margin: auto 0;
    }

    & p {
        font-size: 1.8rem;
        text-transform: uppercase;
        margin: auto .5rem;
    }

    &:hover {
        
        background-color: #0A1612;
        transform: scaleY(1.20) scaleX(1.1);
        transform-origin: bottom center;
        letter-spacing: .3rem;
    }

    @media (max-width: 768px) {
        width: 32.5%;
        
        & .section-bar-icon {
            max-width: 2.2rem;
            max-height: 2.2rem;
        }

        & p {
            font-size: 1.4rem;
            margin: auto .3rem;
        }

        &:hover {
            transform: scaleY(1.1) scaleX(1.05);
            letter-spacing: .15rem;
        }

    }

    @media (max-width: 545px) {
        & .section-bar-icon {
            max-width: 1.6rem;
            max-height: 1.6rem;
        }

        & p {
            font-size: 1.1rem;
            margin: auto .1rem;
        }

        &:hover {
            transform: scaleY(1) scaleX(1);
            letter-spacing: 0;
        }
    }
`;

export const SectionSelectorSelected = css `

`;

export const SectionSelectorWantToSee = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: #084D9B;
    }
    & p {
        color: #084D9B;
    }
`;
export const SectionSelectorWatched = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: #057657;
    }

    & p {
        color: #057657;
    }
`;
export const SectionSelectorLoveIt = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: #E33B57;
    }

    & p {
        color: #E33B57;
    }
`;

//?  saved movie display section

export const SavedMoviesDisplaySection = styled.div ` 
    max-width: 100%;
    box-sizing: border-box;
    border: .4rem solid #F7CE3E;
    margin: 0 2rem 3rem 2rem;
    display: flex;
    flex-wrap: wrap;
    background: #0a161281;
    & p {
        color: wheat;
    }

    @media (max-width: 768px) {
        margin: 0 .2rem 2.5rem .2rem;
    }
`;