import React from 'react';
// redux
import { connect } from 'react-redux';
import { addToCartWantToSee } from '../../redux/actions/saveList';
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
    LovePlusIcon,
    } from './movieItem.styles';

function MovieItem(props) {
    const {poster, name, year, imdbRating} = props.individualMovie;
    const { addToCartWantToSee } = props;
    
    return (
        <MovieItemContainer >
            <CardContainer >
                <CardMediaContainer>
                    <img src={poster} alt="poster"></img>
                    <CardImdbRating>
                        <ImdbRatingStar/>
                        <p>{imdbRating}</p>
                    </CardImdbRating>
                    
                    <CardSaveListButtons>
                        <ToSeeIcon onClick={() => addToCartWantToSee({
                            movieElement: {
                                poster,
                                name,
                                year,
                                imdbRating
                            }
                        })}
                        />
                        <WatchedIcon/> 
                        <LovePlusIcon/> 
                    </CardSaveListButtons>
                </CardMediaContainer>
                <div className="movie-title">{name} <br/>({year})</div>
            </CardContainer>
        </MovieItemContainer>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCartWantToSee: (payload) => { dispatch(addToCartWantToSee(payload))}
    }
  }

export default connect(null, mapDispatchToProps)(MovieItem);
