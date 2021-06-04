import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';
import { WantToSeeContainer } from './wantTooSeeSection.styles';

function WantToSeeSection(props) {
    const {wantToSeeRawMoviesList} = props;
    const wantToSeeMoviesDisplayed = wantToSeeRawMoviesList.filter( elem => elem.saveList.wantToSee)

    return (
        <WantToSeeContainer>
            {
                wantToSeeMoviesDisplayed.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            wantToSeeMoviesDisplayed.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </WantToSeeContainer>
    )
}

function mapStateToProps(state) {
    return {
        wantToSeeRawMoviesList: state.saveList.listOfAllSavedMovies
    }
}

export default connect(mapStateToProps)(WantToSeeSection);
