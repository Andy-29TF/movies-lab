import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';
import { WantToSeeContainer } from './wantTooSeeSection.styles';

function WantToSeeSection(props) {
    const {wantToSeeMoviesList} = props;

    return (
        <WantToSeeContainer>
            {
                wantToSeeMoviesList.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            wantToSeeMoviesList.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </WantToSeeContainer>
    )
}

function mapStateToProps(state) {
    return {
        wantToSeeMoviesList: state.saveList.wantToSee
    }
}

export default connect(mapStateToProps)(WantToSeeSection);
