import styled from 'styled-components';

export const HomeRecommendationsContainer = styled.div `
    width: 100%;
    max-height: auto;
    margin: 2.5rem 0 2rem 0;
    display: flex;
    flex-direction: row;


    @media (max-width: 768px) {
        flex-direction: column;
        margin: 1.5rem 0 1rem 0;
    }
`;