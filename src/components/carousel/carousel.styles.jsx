import styled from 'styled-components';
// import icons
import { ReactComponent as Star} from '../../assets/icons/movieCard/star.svg';

export const CarouselContainer = styled.div `
    width: 70%;
    height: 100%;
    margin: 1rem .8rem 1rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.border};
    filter: drop-shadow(.5rem .5rem 2px ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.dropShadow});
    -webkit-filter: drop-shadow(.5rem .5rem 2px ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.dropShadow});

    & .carousel-slider{
        width: 96.5%;
        margin: 1.1rem 0 .3rem 0;
    }

    & .frame-title{
        position: absolute;
        top: -1.7rem;
        left: 3rem;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 600;
        color: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.frameTitle};
    }

    & .slick-dots {
        & button {
            margin: 0;
            padding: 0; 
            border: none; 
            background: transparent;
            transform: translateY(-42%) translateX(-10%);
        }
    }

    @media (max-width: 1200px) {
        margin: 1rem .8rem .5rem .8rem;

        & .carousel-slider{
            margin: 1.1rem 0 .1rem 0;
        }
        & .frame-title{
            top: -1.5rem;
            left: 2.7rem;
            font-size: 1.7rem;
        }
    }

    @media (max-width: 768px) {
        width: 93%;
        margin: .8rem auto;

        & .carousel-slider{
            margin: 1rem 0 .1rem 0;
        }
        & .frame-title{
            top: -1.2rem;
            left: 1.2rem;
            font-size: 1.4rem;
        }
    }
    
`;

export const CarouselElement = styled.div `
    position: relative;

    & img{
        width: 100%;
        height: auto;
        object-fit: fill;
    }
`;

export const MediaContainer = styled.div `
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 8%;
    left: 2%;

    & p {
        text-transform: uppercase;
        font-size: 2rem;
        color: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.movieName};
        margin: 0 0 0 .4rem;
        padding: 0;

        &:hover {
            text-decoration: underline;
        }
    }

    & .elem-year {
        font-size: 2rem;
        color: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.movieYear};
        margin-left: .3rem;
    }

    @media (max-width: 1200px) {
        bottom: 9%;
        left: 1.5%;

        & p {
            font-size: 1.4rem;
            margin: 0 0 0 .25rem;
        }

        & .elem-year {
        font-size: 1.4rem;
        }
    }
    @media (max-width: 768px) {
        bottom: 5%;
        & p {
            font-size: 1rem;
            margin: 0 0 0 .2rem;
        }

        & .elem-year {
        font-size: 1rem;
        }
    }
`;

export const ImdbRating = styled.div `
    height: 1.9rem;
    width: 3.35rem;
    margin: auto 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.imdb.background};
    border-radius: 10rem;

    & .imdb-rating {
        margin: 0;
        padding: 0;
        color: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.imdb.rating};
        margin: 0 .35rem 0 .4rem;
        font-size: 1rem;
    }

    @media (max-width: 1200px) {
        height: 1.3rem;
        width: 2.5rem;
        & .imdb-rating {
            font-size: .75rem;
            margin: 0 .25rem 0 .27rem;
        }
    }
    @media (max-width: 768px) {
        height: 1rem;
        width: 1.8rem;
        & .imdb-rating {
            font-size: .58rem;
            margin: 0 .2rem 0 .15rem;
        }
    }
`;

export const ImdbRatingStar = styled(Star) `
    width: .88rem;
    fill: ${ props => props.theme.pages.home.homeRecommendationsSection.carousel.imdb.star};
    margin: 0 0 .1rem .4rem;

    @media (max-width: 1200px) {
        margin: 0 0 .1rem .25rem;
        width: .68rem;
    }
    @media (max-width: 768px) {
        margin: 0 0 .05rem .15rem;
        width: .5rem;
    }
`;