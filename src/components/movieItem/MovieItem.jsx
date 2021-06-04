import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { handleAddToOrRemoveFromSaveList } from '../../redux/actions/moviesProcessing';
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
    const { handleAddToOrRemoveFromSaveList } = props;
    const defaultPayload = {id, poster, name, year, imdbRating}

    const [addedInWantToSee, setAddedInWantToSee] = useState(false);
    const [addedInWatched, setAddedInWatched] = useState(false);
    const [addedInLoveIt, setAddedInLoveIt] = useState(false);
     
    function triggerAddToMyList(instructions) {
       if(instructions === "add to want to see") {
        triggerRemoveFromMyList("remove movie from MyList")
        setAddedInWantToSee(true);
        setAddedInWatched(false);
        setAddedInLoveIt(false);
        handleAddToOrRemoveFromSaveList({
            movieElement: {
                ...defaultPayload,
                saveList: {wantToSee: true, watched: false, loveIt: false}
            },
            instructionsForMovieElement: {
                instructions
            }
        });

       }else if(instructions === "add to watched") {
        triggerRemoveFromMyList("remove movie from MyList")
        setAddedInWantToSee(false);
        setAddedInWatched(true);
        setAddedInLoveIt(false);
        handleAddToOrRemoveFromSaveList({
            movieElement: {
                ...defaultPayload,
                saveList: {wantToSee: false, watched: true, loveIt: false}
            },
            instructionsForMovieElement: {
                instructions
            }
        });
       }else if(instructions === "add to love it"){
        triggerRemoveFromMyList("remove movie from MyList")
        setAddedInWantToSee(false);
        setAddedInWatched(false);
        setAddedInLoveIt(true);
        handleAddToOrRemoveFromSaveList({
            movieElement: {
                ...defaultPayload,
                saveList: {wantToSee: false, watched: false, loveIt: true}
            },
            instructionsForMovieElement: {
                instructions
            }
        });
       }
    }

    function triggerRemoveFromMyList(instructions) {
        setAddedInWantToSee(false);
        setAddedInWatched(false);
        setAddedInLoveIt(false);
        handleAddToOrRemoveFromSaveList({
            movieElement: {
                id
            },
            instructionsForMovieElement: {
                instructions
            }
        });
    }

    useEffect(() => {
        if(saveList.wantToSee) {
            setAddedInWantToSee(true);
        }else if(saveList.watched) {
            setAddedInWatched(true);
        }else if(saveList.loveIt){
            setAddedInLoveIt(true);
        }
    }, [addedInWantToSee, addedInWatched, addedInLoveIt])

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
                        <ToSeeIcon 
                            iconstyled={saveList.wantToSee.toString()} 
                            onClick={() => {
                                !addedInWantToSee ? triggerAddToMyList("add to want to see") : triggerRemoveFromMyList("remove movie from MyList")
                            }}
                            />
                        <WatchedIcon 
                            iconstyled={saveList.watched.toString()} 
                            onClick={() => {
                                !addedInWatched ? triggerAddToMyList("add to watched") : triggerRemoveFromMyList("remove movie from MyList")
                            }}
                            /> 
                        <LovePlusIcon 
                            iconstyled={saveList.loveIt.toString()} 
                            onClick={() => {
                                !addedInLoveIt ? triggerAddToMyList("add to love it") : triggerRemoveFromMyList("remove movie from MyList")
                            }}
                            /> 
                    </CardSaveListButtons>
                </CardMediaContainer>
                <div className="movie-title">{name} <br/>({year})</div>
            </CardContainer>
        </MovieItemContainer>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddToOrRemoveFromSaveList: (payload) => dispatch(handleAddToOrRemoveFromSaveList(payload))
    }
  }

export default connect(null, mapDispatchToProps)(MovieItem);
