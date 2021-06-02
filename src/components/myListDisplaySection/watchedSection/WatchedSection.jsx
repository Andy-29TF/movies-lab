import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';

function WatchedSection(props) {
    const {watchedMoviesList} = props;

    return (
        <div>
            {
                watchedMoviesList.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            watchedMoviesList.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        watchedMoviesList: state.saveList.watched
    }
}

export default connect(mapStateToProps)(WatchedSection);
