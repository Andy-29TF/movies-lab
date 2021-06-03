import styled, { css } from 'styled-components';
// import icons
import { ReactComponent as Star} from '../../assets/icons/movieCard/star.svg';

import { ReactComponent as ToSee} from '../../assets/icons/movieCard/wantToSee.svg';
import { ReactComponent as Watched} from '../../assets/icons/movieCard/watched.svg';
import { ReactComponent as LoveIt} from '../../assets/icons/movieCard/loveIt.svg';

export const MovieItemContainer = styled.div `
    flex-basis: 16%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-basis: 21%;
        display: block;
    }
`;

export const CardContainer = styled.div `
    width: 11rem;
    height: auto;
    margin: 1.5rem .5rem;
    overflow: hidden;
    text-align: center;
    

    & img {
        width: 11rem;
        height: 16rem;
        object-fit: fill;
    }

    & .movie-title {
        color: #F7F7FF;
        margin: .5rem 0;
        text-align: center;
        height: 3rem;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }

    @media (max-width: 768px) {
        width: 11rem;
        height: auto;
        margin: .3rem .1rem;
        flex-basis: 50%;

        & img {
            max-width: 100%;
            height: 15rem;
            object-fit: fill;
        }

        & .movie-title {
            margin: 0.3rem 0;
            
        }
    }
`;

// ? IMDB media
export const CardMediaContainer = styled.div `
    position: relative;
`;

export const CardImdbRating = styled.span `
    position: absolute;
    bottom: .3rem;
    right: .25rem;
    width: 2.6rem;
    display: flex;
    flex-direction: row;
    background-color: black;
    border-radius: 30rem;

    & p {
        color: #FFD700;
        margin: auto .1rem;
        padding: 0;
        font-size: .85rem;
    }

    @media (max-width: 768px) {
        width: 2.4rem;

        & p {
            font-size: .70rem;
        }
    }
`;

export const ImdbRatingStar = styled(Star) `
    width: .75rem;
    fill: #FFD700;
    margin: 0 0 .1rem .35rem;

    @media (max-width: 768px) {
        width: .65rem;
        margin: 0 0 .05rem .35rem;
    }
`;

// ? Save List Buttons
export const CardSaveListButtons = styled.div `
    position: absolute;
    top: .03rem;
    right: .05rem;
    width: 1.8rem;
    height: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #0A1612;
    border-radius: 20rem;
`;

const IconstStyle = css `
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
`;

export const ToSeeIcon = styled(ToSee) `
    ${IconstStyle}
    fill: ${props => props.iconstyled === "true" ? "#084D9B" : "#F7F7FF"};

    &:hover{
        fill: ${props => props.iconstyled === "true" ? "#F7F7FF" : "#084D9B"};
    }

    /* this prevents the button from remaining active on tablets or phones */
    @media (max-width: 768px) {
        &:hover{
            fill: ${props => props.iconstyled === "true" ? "#084D9B" : "#F7F7FF"};
        }
    }
`;

export const WatchedIcon = styled(Watched) `
    ${IconstStyle}
    fill: ${props => props.iconstyled === "true" ? "#057657" : "#F7F7FF"};
    margin-left: 0.15rem;

    &:hover{
        fill: ${props => props.iconstyled === "true" ? "#F7F7FF" : "#057657"};
    }

    /* this prevents the button from remaining active on tablets or phones */
    @media (max-width: 768px) {
        &:hover{
            fill: ${props => props.iconstyled === "true" ? "#057657" : "#F7F7FF"};
        }
    }
`;

export const LovePlusIcon = styled(LoveIt) `
    ${IconstStyle}
    fill: ${props => props.iconstyled === "true" ? "#E33B57" : "#F7F7FF"};

    &:hover{
        fill: ${props => props.iconstyled === "true" ? "#F7F7FF" : "#E33B57"};
    }

    /* this prevents the button from remaining active on tablets or phones */
    @media (max-width: 768px) {
        &:hover{
            fill: ${props => props.iconstyled === "true" ? "#E33B57" : "#F7F7FF"};
        }
    }
`;
