import React, { useState, useEffect} from 'react';
// redux
import { connect } from 'react-redux';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import components
import MoviesList from '../../components/moviesList/MoviesList';
import BaseListSidebar from '../../components/baseListSidebar/BaseListSidebar';
//* import the stylized  component
import { MoviesPageContainer, IconWrapper, SettingsIcon } from './moviesPage.styles';

function MoviePage(props) {
    const {movies, match, history} = props;
    const [moviesToBeListed, setMoviesToBeListed] = useState("");
    const [displayFilterSettings, setDisplayFilterSettings ] = useState(false);

    function handleDisplayFilterSettings() {
        setDisplayFilterSettings(!displayFilterSettings);
    }

    useEffect(() => {
        displayFilterSettings 
            ? document.body.style.overflow = 'hidden' 
            : document.body.style.overflow = 'unset'
     }, [ displayFilterSettings ]);

    useEffect( () => {
        const filteringRules = match.params.filteringRules.split("-");
        if( filteringRules.length > 2 ) { history.push("/page-404") }
        // automatically closes the filter menu after a filter when the viewport is less than 768
        displayFilterSettings && handleDisplayFilterSettings();

        if(filteringRules[0] === "unfiltered") {
            if( filteringRules.length > 1 && filteringRules[0] === "unfiltered" ) { history.push("/page-404") }
            setMoviesToBeListed(movies);
        }else if(filteringRules[0] === "year"){
            const listOfFilteredMoviesByYear = movies.filter( elem => elem.year === +filteringRules[1] );
            setMoviesToBeListed(listOfFilteredMoviesByYear);
            if( listOfFilteredMoviesByYear.length <= 0 ) { history.push("/page-404") }
        }else if(filteringRules[0] === "genre") {
            const listOfFilteredMoviesByGenre = movies.filter( elem => elem.categories.includes(filteringRules[1]) )
            setMoviesToBeListed(listOfFilteredMoviesByGenre);
            if( listOfFilteredMoviesByGenre.length <= 0 ) { history.push("/page-404") }
        }else if(filteringRules[0] === "stars") {
            if( filteringRules[1] === "1" ) {
                const listOfFilteredMoviesByStars = movies.filter( elem => elem.imdbRating < 6 );
                setMoviesToBeListed(listOfFilteredMoviesByStars);
            }else if( filteringRules[1] === "2" ) {
                const listOfFilteredMoviesByStars = movies.filter( elem => elem.imdbRating >= 6 && elem.imdbRating <= 8 );
                setMoviesToBeListed(listOfFilteredMoviesByStars);
            }else if( filteringRules[1] === "3" ) {
                const listOfFilteredMoviesByStars = movies.filter( elem => elem.imdbRating > 8);
                setMoviesToBeListed(listOfFilteredMoviesByStars);
            }else {
                history.push("/page-404")
            }
        }else {
            history.push("/page-404")
        }
    }, [match, movies, history])


    return (
        <Layout>
            <MoviesPageContainer className="container-min-max-width">
                <IconWrapper displaySettingsIcon={displayFilterSettings}>
                    <SettingsIcon onClick={() => handleDisplayFilterSettings()}/>
                </IconWrapper>
                <MoviesList rawMovies={moviesToBeListed}/>
                <BaseListSidebar handleDisplayFilterSettings={handleDisplayFilterSettings} displayFilterSettings={displayFilterSettings}/>
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