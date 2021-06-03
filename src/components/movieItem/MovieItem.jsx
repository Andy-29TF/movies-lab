import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { handleAddToSaveList } from '../../redux/actions/moviesProcessing';
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
    const { id, poster, name, year, saveList, imdbRating } = props.individualMovie;
    const { handleAddToSaveList } = props;

    const [movieAddedToAList, setMovieAddedToAList] = useState("")
     
    function theOptionToAddToMyList(instructions) {
        if( instructions === "addToWantToSeeInstruction" ) {
            handleAddToSaveList({
                movieElement: {
                    id,
                    poster,
                    name,
                    year,
                    imdbRating,
                    saveList: {wantToSee: true, watched: false, loveIt: false}
                },
                instructionsForMovieElement: {
                    instructions
                }
            })

            if(movieAddedToAList === "" || movieAddedToAList !== "addToWantToSeeInstruction") { setMovieAddedToAList(instructions); }

        }else if( instructions === "addToWatchedInstruction" ) {
            handleAddToSaveList({
                movieElement: {
                    id,
                    poster,
                    name,
                    year,
                    imdbRating,
                    saveList: {wantToSee: false, watched: true, loveIt: false}
                },
                instructionsForMovieElement: {
                    instructions
                }
            })

            if(movieAddedToAList === "" || movieAddedToAList !== "addToWatchedInstruction") { setMovieAddedToAList(instructions); }
        }else {
            handleAddToSaveList({
                movieElement: {
                    id,
                    poster,
                    name,
                    year,
                    imdbRating,
                    saveList: {wantToSee: false, watched: false, loveIt: true}
                },
                instructionsForMovieElement: {
                    instructions
                }
            })

            if(movieAddedToAList === "" || movieAddedToAList !== "addToLoveItInstruction") { setMovieAddedToAList(instructions); }
        }
    }

    useEffect(() => {
        // if the component is added in a list the component will update the status
    }, [movieAddedToAList])

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
                        <ToSeeIcon iconstyled={saveList.wantToSee.toString()} onClick={() => {if(movieAddedToAList === "" || movieAddedToAList !== "addToWantToSeeInstruction") { theOptionToAddToMyList("addToWantToSeeInstruction")}}}/>
                        <WatchedIcon iconstyled={saveList.watched.toString()} onClick={() => {if(movieAddedToAList === "" || movieAddedToAList !== "addToWatchedInstruction") { theOptionToAddToMyList("addToWatchedInstruction")}}}/> 
                        <LovePlusIcon iconstyled={saveList.loveIt.toString()} onClick={() => {if(movieAddedToAList === "" || movieAddedToAList !== "addToLoveItInstruction") { theOptionToAddToMyList("addToLoveItInstruction")}}}/> 
                    </CardSaveListButtons>
                </CardMediaContainer>
                <div className="movie-title">{name} <br/>({year})</div>
            </CardContainer>
        </MovieItemContainer>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddToSaveList: (payload) => dispatch(handleAddToSaveList(payload))
    }
  }

export default connect(null, mapDispatchToProps)(MovieItem);
