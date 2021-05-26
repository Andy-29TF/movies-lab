import styled from 'styled-components';

export const MoviesListContainer = styled.div `
    margin: 2.5rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    & button {
        width: 90%;
        color: #0A1612 ;
        text-transform: uppercase;
        text-decoration: none;
        background: #F7CE3E; 
        padding: 1.1rem;
        border-radius: .3rem;
        display: inline-block;
        border: none;
        transition: all 0.4s ease 0s;

        &:hover {
            width: 96%;
            color: #F7CE3E ;
            background: #0A1612;
            letter-spacing: .3rem;
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
            transition: all 0.4s ease 0s;
        }
    }
`;