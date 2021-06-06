import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
//* import the stylized  component
import { HomeMovieRecommendedContainer, TopRatedMovie, ImdbRating, ImdbRatingStar } from './homeMovieRecommended.styles';

function HomeMovieRecommended(props) {
    const { topRatedMovieElement } = props;
    const [movieIsAvailable, setMovieIsAvailable] = useState(false);

    useEffect(() => {
        if(topRatedMovieElement.length > 0) {

        }
        topRatedMovieElement.length > 0 && setMovieIsAvailable(true)
    },[topRatedMovieElement])

    return (
        <HomeMovieRecommendedContainer>
            <span className="frame-title">top rated</span>
            {
                movieIsAvailable && <TopRatedMovie>
                                        <div className="poster-container">
                                            <img src={topRatedMovieElement[0].poster} alt={`Poster for ${topRatedMovieElement[0].name}`}></img>
                                            <ImdbRating><ImdbRatingStar/><p>{topRatedMovieElement[0].imdbRating}</p></ImdbRating>
                                        </div>
                                        <p>{topRatedMovieElement[0].name}<br/>({topRatedMovieElement[0].year})</p>
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
