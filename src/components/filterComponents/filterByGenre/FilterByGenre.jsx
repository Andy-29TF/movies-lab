import React from 'react';
// redux
import { connect } from 'react-redux';
//* import the stylized  component
import { FilterByGenreContainer, FilterByGenreElements, ScrollUpAndDownIcon, LinkElement } from './filterByGenre.styles';


function FilterByGenre(props) {
    const { uniqueGenres } = props

    return (
        <FilterByGenreContainer>
            <p>Filter By Genre:</p>
            <ScrollUpAndDownIcon />
            <FilterByGenreElements>
                <LinkElement to="/movies/unfiltered" key="02" deletedecorations={"yes"}>All</LinkElement>
                {
                    uniqueGenres.map( (elem, index) => <LinkElement to={`/movies/genre-${elem}`} key={index}>{elem}</LinkElement>) 
                }
            </FilterByGenreElements>
        </FilterByGenreContainer>
    )
}

function mapStateToProps(state) {
    const uniqueGenres = [ ...new Set(state.moviesProcessing.rawMovies.flatMap(elem => elem.categories))];
    
    return {
        uniqueGenres
    }
}

export default connect(mapStateToProps)(FilterByGenre);
