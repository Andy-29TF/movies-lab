import styled from 'styled-components';
// import icons
import { ReactComponent as Scroll} from '../../assets/icons/homePage/scroll.svg';

export const HomeLatestMoviesContainer = styled.div `
    width: auto;
    margin: 4rem 2rem 2rem 2rem;

    @media (max-width: 1200px) {
        margin: 4rem 1rem 2rem 1rem;
    }

    @media (max-width: 768px) {
        margin: 3rem .5rem 2rem .5rem;
    }

    @media (max-width: 360px) {
        margin: 3rem .2rem 2rem .2rem;
    }
`;

export const SectionTitleContainer = styled.div `
    width: 100%;
    border-bottom: 3px solid #0A1612;
    filter: drop-shadow(.5rem .5rem 2px #0a1612bc);
    display: flex;
    justify-content: space-between;

    & .section-title {
        text-transform: uppercase;
        font-size: 1.9rem;
        font-weight: 600;
        color: #F7F7FF;
        margin: 0 2rem;
    }

    @media (max-width: 768px) {
        & .section-title {
            font-size: 1.6rem;
            margin: 0 1.5rem;
        }
    }
    @media (max-width: 450px) {
        & .section-title {
            font-size: 1.5rem;
            margin: 0 1.1rem;
        }
    }
`;

export const ScrollIcon = styled(Scroll) `
    margin: auto 1rem;
    width: 1.8rem;
    padding: .2rem;
    border-radius: .5rem;
    background-color: #F7F7FF;

    @media (max-width: 768px) {
        margin: auto .8rem;
        width: 1.8rem;
        padding: .1rem;
    }
    @media (max-width: 450px) {
        margin: auto .5rem;
        width: 1.7rem;
        padding: .1rem;
    }
`;

export const  WrapperContainer = styled.div `
    display: flex;
    overflow-x: auto;
    margin: .5rem 0;

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 100px;
        background-color: #c5c1c0;
    }
    &::-webkit-scrollbar {
        height: 11px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background: #0A1612;
        border-radius: 10px;
	    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    }

    @media (max-width: 768px) {
        margin: 1.1rem 0;
    }
`;  
