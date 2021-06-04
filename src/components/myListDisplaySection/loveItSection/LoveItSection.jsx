import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';
import { LoveItContainer } from './loveItSection.styles';

function LoveItSection(props) {
    const {loveItRawMoviesList} = props;
    const loveItMoviesDisplayed = loveItRawMoviesList.filter( elem => elem.saveList.loveIt)

    return (
        <LoveItContainer>
            {
                loveItMoviesDisplayed.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            loveItMoviesDisplayed.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </LoveItContainer>
    )
}

function mapStateToProps(state) {
    return {
        loveItRawMoviesList: state.saveList.listOfAllSavedMovies
    }
}

export default connect(mapStateToProps)(LoveItSection);
