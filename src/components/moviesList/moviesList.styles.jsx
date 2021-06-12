import styled from 'styled-components';

export const MoviesListContainer = styled.div `
    margin: 1.5rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & button {
        width: 90%;
        color: ${ props => props.theme.pages.moviesPage.moviesList.button.color};
        text-transform: uppercase;
        text-decoration: none;
        background: ${ props => props.theme.pages.moviesPage.moviesList.button.background}; 
        padding: 1.1rem;
        border-radius: .3rem;
        display: inline-block;
        border: none;
        transition: all 0.4s ease 0s;
        margin: 1rem auto 0 auto;

        &:hover {
            width: 96%;
            color: ${ props => props.theme.pages.moviesPage.moviesList.button.hover.color};
            background: ${ props => props.theme.pages.moviesPage.moviesList.button.hover.background};
            letter-spacing: .3rem;
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
            transition: all 0.4s ease 0s;
        }
    }
`;