import React, { useState, useEffect } from 'react';
import axios from 'axios';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
//* import the stylized  component
import { MoviesPageContainer } from './moviesPage.styles';
// import components
import MoviesList from '../../components/moviesList/MoviesList';
import BaseListSidebar from '../../components/baseListSidebar/BaseListSidebar';

function MoviePage() {
    const [ movies, setMovies] = useState([]);

    useEffect( () => {
        axios.get('https://gist.githubusercontent.com/Andy-29TF/6ea8139b7bbdce60085f96911b9494f7/raw/0ee2ef514b3b51dcf24fe3888afc634fd728b111/movies.json')
            .then( resp => {
                setMovies(resp.data)
            })
            .catch( err =>{
                console.log(err)
            })
    }, []);

    return (
        <Layout>
            <MoviesPageContainer className="container-min-max-width">
                <MoviesList rawMovies={movies}></MoviesList>
                <BaseListSidebar></BaseListSidebar>
            </MoviesPageContainer>
        </Layout>
    )
}

export default MoviePage;