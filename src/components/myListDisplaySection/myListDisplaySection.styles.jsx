import styled from 'styled-components';


export const MyListDisplayContainer = styled.div ` 
    max-width: 100%;
    min-height: 70vh;
    box-sizing: border-box;
    border: .4rem solid #F7CE3E;
    margin: 0 2rem 1.5rem 2rem;
    display: flex;
    background: #0a161281;

    @media (max-width: 768px) {
        min-height: 73vh;
        margin: 0 0 1rem 0;
        border: .2rem solid #F7CE3E;
    }

`;

// !the following 2 components are imported in all 3 list possibilities

export const EmptyListContainer = styled.div `
    width: 100%;
    text-align: center;
    padding: 20%;

    & p {
        margin: auto;
        font-size: 5rem;
        text-transform: uppercase;
        color: #F7F7FF;
    }

    @media (max-width: 768px) {
        & p {
            font-size: 3rem;
        }
    }
`;
export const ItemsListContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        margin: .8rem 0;
    }
`;