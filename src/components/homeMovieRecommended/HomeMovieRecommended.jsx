import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
// router
import { Link } from 'react-router-dom';
//* import the stylized  component
import { HomeMovieRecommendedContainer, TopRatedMovie, ImdbRating, ImdbRatingStar } from './homeMovieRecommended.styles';

function HomeMovieRecommended(props) {
    const { topRatedMovieElement } = props;
    const [movieIsAvailable, setMovieIsAvailable] = useState(false);

    useEffect(() => {
        
        topRatedMovieElement.length > 0 && setMovieIsAvailable(true)
    },[topRatedMovieElement])

    return (
        <HomeMovieRecommendedContainer>
            <span className="frame-title">top rated</span>
            {
                movieIsAvailable && <TopRatedMovie>
                                        <div className="movie-container">
                                            <Link to={`/title/${topRatedMovieElement[0].id}`}>
                                                <div className="poster-container">
                                                    <img src={topRatedMovieElement[0].poster} alt={`Poster for ${topRatedMovieElement[0].name}`}></img>
                                                    <ImdbRating><ImdbRatingStar/><p>{topRatedMovieElement[0].imdbRating}</p></ImdbRating>
                                                </div>
                                                <p className="movie-name">{topRatedMovieElement[0].name}<br/>({topRatedMovieElement[0].year})</p>
                                            </Link>
                                        </div>
                                        <p className="movie-storyline">{topRatedMovieElement[0].storyline}</p>
                                    </TopRatedMovie>

            }
            
        </HomeMovieRecommendedContainer>
    )
}

function mapStateToProps(state) {
    return {
        topRatedMovieElement: state.moviesProcessing.rawMovies.filter(elem => elem.id === 47 )
    }
}

export default connect(mapStateToProps)(HomeMovieRecommended);
