import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';
import { WatchedContainer } from './watchedSection.styles';

function WatchedSection(props) {
    const {watchedRawMoviesList} = props;
    const watchedMoviesDisplayed = watchedRawMoviesList.filter( elem => elem.saveList.watched)

    return (
        <WatchedContainer>
            {
                watchedMoviesDisplayed.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            watchedMoviesDisplayed.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </WatchedContainer>
    )
}

function mapStateToProps(state) {
    return {
        watchedRawMoviesList: state.saveList.listOfAllSavedMovies
    }
}

export default connect(mapStateToProps)(WatchedSection);
