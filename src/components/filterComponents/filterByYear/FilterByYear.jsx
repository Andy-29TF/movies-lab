import React from 'react';
// redux
import { connect } from 'react-redux';
//* import the stylized  component
import { FilterByYearContainer, FilterByYearElements, LinkElement } from './filterByYear.styles';
 
function FilterByYear(props) {
    const { uniqueYears } = props;

    return (
        <FilterByYearContainer>
            <p>Filter By Year:</p>
            <FilterByYearElements>
                {
                    uniqueYears.map(elem => <LinkElement>{elem}</LinkElement>)
                }
            </FilterByYearElements>
        </FilterByYearContainer>
    )
}

function mapStateToProps(state) {
    const uniqueYears = [...new Set(state.moviesProcessing.rawMovies.map(elem => elem.year))]
    return {
        uniqueYears
    }
}

export default connect(mapStateToProps)(FilterByYear);
