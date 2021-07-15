import React, { useState, useEffect, useCallback, useRef } from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// redux
import { connect } from 'react-redux';
import { handleAddToOrRemoveFromSaveList } from '../../redux/actions/moviesProcessing';
// router
import { Link } from 'react-router-dom';
//* import the stylized  component
import { 
    TitlePageContainer, 
    HeroWrapper,
    HeroContainer,
    MainInformationContainer,
    SaveListContainer,
    ToSeeIcon,
    WatchedIcon,
    LoveItIcon,
    ImdbContainer,
    ImdbNote,
    MobileImdbAndSaveListContainer,
    MobileSaveListContainer,
    MobileImdbContainer,
    ContentWrapper,
    StorylineContainer,
    TrailerContainer,
    DetailsPanel,
    SummaryItem
} from './titlePage.styles';


function TitlePage(props) {
    const { movieById, handleAddToOrRemoveFromSaveList, availableIds, history } = props;
    const [movieByIdIsAvailable, setMovieByIdIsAvailable] = useState(false);
    // * control for the first render
    const firstUpdate = useRef(true);

    //< My List features
    const [addedInWantToSee, setAddedInWantToSee] = useState(false);
    const [addedInWatched, setAddedInWatched] = useState(false);
    const [addedInLoveIt, setAddedInLoveIt] = useState(false);

    function triggerAddToMyList(instructions) {
        const { id, poster, name, year, imdbRating } = movieById[0];
        const defaultPayload = {id, poster, name, year, imdbRating};

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
        const { id } = movieById[0];

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

    const refreshSaveListStatus = useCallback(() => {
        const { saveList } = movieById[0];

            if(saveList.wantToSee) {
                setAddedInWantToSee(true);
            }else if(saveList.watched) {
                setAddedInWatched(true);
            }else if(saveList.loveIt){
                setAddedInLoveIt(true);
            }
    }, [movieById])

//< END MyList features

    useEffect(() => {
        if(movieById.length > 0) {
            setMovieByIdIsAvailable(true)
            refreshSaveListStatus()
        }
    }, [refreshSaveListStatus, movieById.length])

    // * redirects to page404 if the path does not match
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        }else if (availableIds.length > 0 && !movieByIdIsAvailable){
            !availableIds.includes(+props.match.params.id) && history.push("/page-404")
        }
    }, [availableIds, history, movieByIdIsAvailable, props.match.params.id])

    return (
        <Layout>
            {
                movieByIdIsAvailable 
                    ?<TitlePageContainer className="container-min-max-width">
                        <HeroWrapper>
                            <HeroContainer bgImage={movieById[0].landscapeCover}>
                                <MainInformationContainer>
                                    <img src={movieById[0].poster} alt={movieById[0].name}/>
                                    <div className="main-info">
                                        <p>{movieById[0].name} (<Link className="year-link" to={`/movies/year-${movieById[0].year}`}>{movieById[0].year}</Link>)</p>
                                        <div className="genre-links">
                                            <p>Genre:</p>
                                            {
                                                movieById[0].categories.map((elem, index) => {
                                                    return (
                                                        <p className="genre-link" key={index}>
                                                            <Link to={`/movies/genre-${elem}`} key={index}>{ elem }</Link>
                                                        </p>)
                                                })
                                            }
                                        </div>
                                        <SaveListContainer>
                                            <ToSeeIcon
                                                iconstyled={movieById[0].saveList.wantToSee.toString()} 
                                                onClick={() => {
                                                    !addedInWantToSee ? triggerAddToMyList("add to want to see") : triggerRemoveFromMyList("remove movie from MyList")
                                                }}
                                            />
                                            <WatchedIcon
                                                iconstyled={movieById[0].saveList.watched.toString()}
                                                onClick={() => {
                                                    !addedInWatched ? triggerAddToMyList("add to watched") : triggerRemoveFromMyList("remove movie from MyList")
                                                }} 
                                            />
                                            <LoveItIcon
                                                iconstyled={movieById[0].saveList.loveIt.toString()}
                                                onClick={() => {
                                                    !addedInLoveIt ? triggerAddToMyList("add to love it") : triggerRemoveFromMyList("remove movie from MyList")
                                                }} 
                                            />
                                        </SaveListContainer>
                                    </div>
                                </MainInformationContainer>
                                <ImdbContainer>
                                    <ImdbNote>
                                        <p>{movieById[0].imdbRating}</p>
                                    </ImdbNote>
                                    <p>{`imdb votes: ${movieById[0].imdbVotes}`}</p>
                                </ImdbContainer>
                            </HeroContainer>
                            <MobileImdbAndSaveListContainer>
                                <MobileSaveListContainer>
                                    <ToSeeIcon
                                        iconstyled={movieById[0].saveList.wantToSee.toString()} 
                                        onClick={() => {
                                            !addedInWantToSee ? triggerAddToMyList("add to want to see") : triggerRemoveFromMyList("remove movie from MyList")
                                        }}
                                    />
                                    <WatchedIcon
                                        iconstyled={movieById[0].saveList.watched.toString()} 
                                        onClick={() => {
                                            !addedInWatched ? triggerAddToMyList("add to watched") : triggerRemoveFromMyList("remove movie from MyList")
                                        }}
                                    />
                                    <LoveItIcon
                                        iconstyled={movieById[0].saveList.loveIt.toString()} 
                                        onClick={() => {
                                            !addedInLoveIt ? triggerAddToMyList("add to love it") : triggerRemoveFromMyList("remove movie from MyList")
                                        }}
                                    />
                                </MobileSaveListContainer>
                                <MobileImdbContainer>
                                    <ImdbNote>
                                        <img width="224" height="224" alt="Star" title="Star" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC0xMCA1MTEuOTg2ODUgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMC42NTIzNDQgMTg1LjkwMjM0NGMtMy4zNTE1NjMtMTAuMzY3MTg4LTEyLjU0Njg3NS0xNy43MzA0NjktMjMuNDI1NzgyLTE4LjcxMDkzOGwtMTQ3Ljc3MzQzNy0xMy40MTc5NjgtNTguNDMzNTk0LTEzNi43Njk1MzJjLTQuMzA4NTkzLTEwLjAyMzQzNy0xNC4xMjEwOTMtMTYuNTExNzE4LTI1LjAyMzQzNy0xNi41MTE3MThzLTIwLjcxNDg0NCA2LjQ4ODI4MS0yNS4wMjM0MzggMTYuNTM1MTU2bC01OC40MzM1OTQgMTM2Ljc0NjA5NC0xNDcuNzk2ODc0IDEzLjQxNzk2OGMtMTAuODU5Mzc2IDEuMDAzOTA2LTIwLjAzMTI1IDguMzQzNzUtMjMuNDAyMzQ0IDE4LjcxMDkzOC0zLjM3MTA5NCAxMC4zNjcxODctLjI1NzgxMyAyMS43MzgyODEgNy45NTcwMzEgMjguOTA2MjVsMTExLjY5OTIxOSA5Ny45NjA5MzctMzIuOTM3NSAxNDUuMDg5ODQ0Yy0yLjQxMDE1NiAxMC42Njc5NjkgMS43MzA0NjggMjEuNjk1MzEzIDEwLjU4MjAzMSAyOC4wOTM3NSA0Ljc1NzgxMyAzLjQzNzUgMTAuMzI0MjE5IDUuMTg3NSAxNS45Mzc1IDUuMTg3NSA0LjgzOTg0NCAwIDkuNjQwNjI1LTEuMzA0Njg3IDEzLjk0OTIxOS0zLjg4MjgxM2wxMjcuNDY4NzUtNzYuMTgzNTkzIDEyNy40MjE4NzUgNzYuMTgzNTkzYzkuMzI0MjE5IDUuNjA5Mzc2IDIxLjA3ODEyNSA1LjA5NzY1NyAyOS45MTAxNTYtMS4zMDQ2ODcgOC44NTU0NjktNi40MTc5NjkgMTIuOTkyMTg3LTE3LjQ0OTIxOSAxMC41ODIwMzEtMjguMDkzNzVsLTMyLjkzNzUtMTQ1LjA4OTg0NCAxMTEuNjk5MjE5LTk3Ljk0MTQwNmM4LjIxNDg0NC03LjE4NzUgMTEuMzUxNTYzLTE4LjUzOTA2MyA3Ljk4MDQ2OS0yOC45MjU3ODF6bTAgMCIgZmlsbD0iI2ZmYzEwNyIvPjwvc3ZnPg==" />
                                        <p>{movieById[0].imdbRating}</p>
                                    </ImdbNote>
                                    <p>imdb votes: <br/> {movieById[0].imdbVotes}</p>
                                </MobileImdbContainer>
                            </MobileImdbAndSaveListContainer>
                        </HeroWrapper>
                        <ContentWrapper>
                            <StorylineContainer>
                                <h2>storyline</h2>
                                <p>{movieById[0].storyline}</p>
                            </StorylineContainer>
                            <TrailerContainer>
                                <iframe width="854" height="480" src={movieById[0].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </TrailerContainer>
                            <DetailsPanel>
                                <SummaryItem>
                                    <h4>director:</h4>
                                    <p>{movieById[0].director}</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>writers:</h4>
                                    {
                                        movieById[0].writer.map( (elem, index) => <p key={index}>{elem}</p>)
                                    }
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>cast:</h4>
                                    {
                                        movieById[0].actors.map( (elem, index) => <p key={index}>{elem}</p>)
                                    }
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>awards:</h4>
                                    <p>{movieById[0].awards}</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>runtime:</h4>
                                    <p>{movieById[0].runtime} min</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>release date:</h4>
                                    <p>{movieById[0].releaseDate.replace(/#|-/g, '/')}</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>budget:</h4>
                                    <p>{movieById[0].budget}</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>language:</h4>
                                    <p>{movieById[0].language}</p>
                                </SummaryItem>
                                <SummaryItem>
                                    <h4>country:</h4>
                                    <p>{movieById[0].country}</p>
                                </SummaryItem>
                            </DetailsPanel>
                        </ContentWrapper>
                    </TitlePageContainer>
                    : null
            }
        </Layout>
    )
}

function mapStateToProps(state, props) {
    const movie_id = props.match.params.id;
    
    return {
        movieById: state.moviesProcessing.rawMovies.filter( elem => elem.id === +movie_id ),
        availableIds: state.moviesProcessing.rawMovies.map ( elem => elem.id )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddToOrRemoveFromSaveList: (payload) => dispatch(handleAddToOrRemoveFromSaveList(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
