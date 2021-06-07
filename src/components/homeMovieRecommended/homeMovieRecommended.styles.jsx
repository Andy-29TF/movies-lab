import styled from 'styled-components';
// import icons
import { ReactComponent as Star} from '../../assets/icons/movieCard/star.svg';

export const HomeMovieRecommendedContainer = styled.div `
    width: 30%;
    height: auto;
    margin: 1rem 2rem 1rem .5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #0A1612;
    filter: drop-shadow(.5rem .5rem 2px #0a1612bc);

    & .frame-title {
        position: absolute;
        top: -1.7rem;
        right: 1.2rem;
        text-transform: uppercase;
        font-size: 1.9rem;
        font-weight: 600;
        color: #F7F7FF;
    }

    @media (max-width: 1200px) {
        margin: 1rem 1.1rem 1rem .8rem;
        & .frame-title {
            top: -1.5rem;
            right: .9rem;
            font-size: 1.7rem;
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        margin: 2rem auto;
        & .frame-title {
            top: -1.2rem;
            right: .8rem;
            font-size: 1.4rem;
        }
    }
`;

export const TopRatedMovie = styled.div `
    width: 92.5%;
    margin: 1.2rem 0 0 0;
    position: relative;

    & img {
        width: 100%;
        object-fit: fill;
    }

    & .movie-name {
        color: #F7F7FF;
        text-align: center;
        font-size: 1.3rem;
        padding: 0;
        margin: .7rem 0 .67rem 0;
    }

    .movie-storyline {
        display: none;
    }


    & .poster-container{
        position: relative;
    }

    @media (max-width: 1200px) {
        width: 88.95%;

        & .movie-name {
            font-size: 1.15rem;
            margin: .55rem 0 .36rem 0;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;

        .movie-container {
            width: 50%;
        }
        .movie-storyline{
            display: block;
            width: 45%;
            font-size: 1rem;
            max-height: 25rem;
            color: #F7F7FF;
            margin: 1rem 0 1rem 2.5rem;
            overflow: scroll;
            text-align: center;

            &::-webkit-scrollbar {
                width: 0;
            }
        }
    }

    @media (max-width: 650px) {
        .movie-storyline{
            font-size: .9rem;
            max-height: 19.5rem;
            margin: 1rem 0 .2rem 2rem;
        }
    }

    @media (max-width: 450px) {
        .movie-storyline{
            font-size: .8rem;
            max-height: 17rem;
            margin: .5rem 0 .2rem 1.5rem;
        }
    }

    @media (max-width: 350px) {
        display: block;
        .movie-storyline{
            display: none;
        }
        .movie-container {
            width: 90%;
            margin: auto;
        }
    }
`;

export const ImdbRating = styled.div `
    position: absolute;
    bottom: 1.5%;
    right: 1.5%;
    width: 3.25rem;
    display: flex;
    flex-direction: row;
    background-color: #0A1612;
    border-radius: 30rem;

    & p {
        color: #FFD700;
        margin: auto .3rem;
        padding: 0;
        font-size: 1rem;
    }

    @media (max-width: 1200px) {
        width: 2.7rem;

        & p {
            font-size: .85rem;
            margin: auto .15rem;
        }
    }
`;

export const ImdbRatingStar = styled(Star) `
    width: .85rem;
    fill: #FFD700;
    margin: 0 0 .1rem .35rem;

    @media (max-width: 1200px) {
        width: .65rem;
        margin: 0 0 .05rem .35rem;
    }
`;