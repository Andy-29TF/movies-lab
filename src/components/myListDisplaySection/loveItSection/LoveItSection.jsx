import React from 'react';
// redux
import { connect } from 'react-redux';
// import components
import MovieItem from '../../movieItem/MovieItem';
//* import the stylized  component
import { ItemsListContainer, EmptyListContainer } from '../myListDisplaySection.styles';

function LoveItSection(props) {
    const {loveItMoviesList} = props;

    return (
        <div>
            {
                loveItMoviesList.length <= 0 
                    ?<EmptyListContainer>
                        <p>this list is empty...</p>
                     </EmptyListContainer>
                    :<ItemsListContainer>
                        {
                            loveItMoviesList.map(elem => <MovieItem className="movie-item" individualMovie={elem} key={`${elem.name} ${elem.id}`}/>)
                        }
                     </ItemsListContainer>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        loveItMoviesList: state.saveList.loveIt
    }
}

export default connect(mapStateToProps)(LoveItSection);
