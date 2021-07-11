import styled from 'styled-components';

export const NewsItemContainer = styled.div `
    flex-basis: 31%;
    width: 100%;
    height: auto;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;

    @media (max-width: 1000px) {
        flex-basis: 48%;
    }
    @media (max-width: 600px) {
        flex-basis: 96%;
    }

    & a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            color: ${ props => props.theme.components.newsItem.link};
        }
    }

    & img {
        width: 100%;
        border-radius: 1.5rem 1.5rem 0 0;
    }

    & #titleContainer {
        font-size: 1.2rem;
        color: ${ props => props.theme.components.newsItem.title};
        margin: .5rem .2rem;
    }
`;