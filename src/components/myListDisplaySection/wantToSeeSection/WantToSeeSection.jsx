import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';

function WantToSeeSection(props) {
    const {wantToSeeMoviesList} = props;

    return (
        <div>
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
        </div>
    )
}

function mapStateToProps(state) {
    return {
        wantToSeeMoviesList: state.saveList.wantToSee
    }
}

export default connect(mapStateToProps)(WantToSeeSection);
