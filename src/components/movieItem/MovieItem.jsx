import React from 'react';
//* import the stylized  component
import {
    MovieItemContainer, 
    CardContainer, 
    CardImdbRating, 
    ImdbRatingStar, 
    CardMediaContainer, 
    CardSaveListButtons,
    ToSeeIcon, 
    WatchedIcon, 
    LovePlusIcon,
    } from './movieItem.styles';

function MovieItem(props) {
    const {poster, name, year, imdbRating} = props.individualMovie;

    return (
        <MovieItemContainer >
            <CardContainer >
                <CardMediaContainer>
                    <img src={poster} alt="poster"></img>
                    <CardImdbRating>
                        <ImdbRatingStar/>
                        <p>{imdbRating}</p>
                    </CardImdbRating>
                    
                    <CardSaveListButtons>
                        <ToSeeIcon/>
                        <WatchedIcon/> 
                        <LovePlusIcon/> 
                    </CardSaveListButtons>
                </CardMediaContainer>
                <div className="movie-title">{name} <br/>({year})</div>
            </CardContainer>
        </MovieItemContainer>
    )
}

export default MovieItem;
