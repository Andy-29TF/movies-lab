import React from 'react';
// redux
import { connect } from 'react-redux';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import components
import MoviesList from '../../components/moviesList/MoviesList';
import BaseListSidebar from '../../components/baseListSidebar/BaseListSidebar';
//* import the stylized  component
import { MoviesPageContainer } from './moviesPage.styles';

function MoviePage(props) {
    const {movies} = props;

    return (
        <Layout>
            <MoviesPageContainer className="container-min-max-width">
                <MoviesList rawMovies={movies}></MoviesList>
                <BaseListSidebar></BaseListSidebar>
            </MoviesPageContainer>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        movies: state.moviesProcessing.rawMovies
    };
}

export default connect(mapStateToProps)(MoviePage);