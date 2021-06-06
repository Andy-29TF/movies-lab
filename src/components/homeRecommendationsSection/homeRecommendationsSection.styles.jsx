import styled from 'styled-components';

export const HomeRecommendationsContainer = styled.div `
    width: 100%;
    max-height: 70vh;
    margin: 2.5rem 0;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        max-height: 127vh;
        margin: 1.5rem 0;
    }
`;