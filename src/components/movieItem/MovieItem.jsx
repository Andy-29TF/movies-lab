import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { handleAddToOrRemoveFromSaveList } from '../../redux/actions/moviesProcessing';
// router
import { Link } from 'react-router-dom';
// import react-lazyload component
import LazyLoad from 'react-lazyload';
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
    LoveItIcon,
    } from './movieItem.styles';

function MovieItem(props) {
    const { id, poster, name, year, saveList, imdbRating } = props.individualMovie;
    const { handleAddToOrRemoveFromSaveList } = props;
    const defaultPayload = {id, poster, name, year, imdbRating};

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
    }, [addedInWantToSee, addedInWatched, addedInLoveIt, saveList.wantToSee, saveList.watched, saveList.loveIt])

    return (
        <MovieItemContainer >
            <CardContainer >
                <CardMediaContainer>
                    <LazyLoad className="image-container" height={'100%'} offset={500} >
                        <img src={poster} alt="poster"></img>
                        <span><Link to={`/title/${id}`}> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzMywwLDAsMTE0Ljg0NCwwLDI1NnMxMTQuODMzLDI1NiwyNTYsMjU2czI1Ni0xMTQuODQ0LDI1Ni0yNTZTMzk3LjE2NywwLDI1NiwweiBNMzU3Ljc3MSwyNjQuOTY5DQoJCQlsLTE0OS4zMzMsOTZjLTEuNzUsMS4xMzUtMy43NzEsMS42OTgtNS43NzEsMS42OThjLTEuNzUsMC0zLjUyMS0wLjQzOC01LjEwNC0xLjMwMkMxOTQuMTI1LDM1OS40OSwxOTIsMzU1LjkwNiwxOTIsMzUyVjE2MA0KCQkJYzAtMy45MDYsMi4xMjUtNy40OSw1LjU2My05LjM2NWMzLjM3NS0xLjg1NCw3LjYwNC0xLjc0LDEwLjg3NSwwLjM5NmwxNDkuMzMzLDk2YzMuMDQyLDEuOTU4LDQuODk2LDUuMzQ0LDQuODk2LDguOTY5DQoJCQlTMzYwLjgxMywyNjMuMDEsMzU3Ljc3MSwyNjQuOTY5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="playBtn" /> </Link></span>
                    </LazyLoad>
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
                        <LoveItIcon 
                            iconstyled={saveList.loveIt.toString()} 
                            onClick={() => {
                                !addedInLoveIt ? triggerAddToMyList("add to love it") : triggerRemoveFromMyList("remove movie from MyList")
                            }}
                        /> 
                    </CardSaveListButtons>
                </CardMediaContainer>
                <Link to={`/title/${id}`}>
                    <div className="movie-title">{name} <br/>({year})</div>
                </Link>
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
