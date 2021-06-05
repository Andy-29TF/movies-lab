import styled from 'styled-components';

export const CarouselContainer = styled.div `
    width: 70%;
    height: 100%;
    margin: 1rem 2rem 1rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #0A1612;
    filter: drop-shadow(.5rem .5rem 2px #0a1612bc);

    & .carousel-slider{
        width: 96%;
        margin: 2rem 0 .8rem 0;
    }

    & .frame-title{
        position: absolute;
        top: -1.5rem;
        left: 3rem;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 600;
        color: #F7F7FF;
    }
`;

export const CarouselElement = styled.div `

    & img{
        width: 100%;
        object-fit: fill;
    }
`;