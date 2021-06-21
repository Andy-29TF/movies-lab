import React, { useState, useEffect } from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// redux
import { connect } from 'react-redux';
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
    MobileImdbContainer
} from './titlePage.styles';

function TitlePage(props) {
    const { movieById } = props;
    const [movieByIdIsAvailable, setMovieByIdIsAvailable] = useState(false);

    useEffect(() => {
        movieById.length > 0 && setMovieByIdIsAvailable(true)
    },[movieById])

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
                                            />
                                            <WatchedIcon
                                                iconstyled={movieById[0].saveList.watched.toString()} 
                                            />
                                            <LoveItIcon
                                                iconstyled={movieById[0].saveList.loveIt.toString()} 
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
                                    />
                                    <WatchedIcon
                                        iconstyled={movieById[0].saveList.watched.toString()} 
                                    />
                                    <LoveItIcon
                                        iconstyled={movieById[0].saveList.loveIt.toString()} 
                                    />
                                </MobileSaveListContainer>
                                <MobileImdbContainer>
                                    <ImdbNote>
                                        <p>{movieById[0].imdbRating}</p>
                                    </ImdbNote>
                                    <p>imdb votes: <br/> {movieById[0].imdbVotes}</p>
                                </MobileImdbContainer>
                            </MobileImdbAndSaveListContainer>
                        </HeroWrapper>
                    </TitlePageContainer>
                    : null
            }
        </Layout>
    )
}

function mapStateToProps(state, props) {
    const movie_id = props.match.params.id;
    
    return {
        movieById: state.moviesProcessing.rawMovies.filter(elem => elem.id === +movie_id)
    }
}

export default connect(mapStateToProps)(TitlePage);
