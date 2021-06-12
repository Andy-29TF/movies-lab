import React from 'react';
//* import the stylized  component
import { FilterByStarsContainer, FilterByStarsElements, LinkElement } from './filterByStarts.styles';

function FilterByStars() {
    return (
        <FilterByStarsContainer>
            <p>Filter By Stars:</p>
            <FilterByStarsElements>
                <LinkElement to="/movies/unfiltered" key="03">All</LinkElement>
                <LinkElement to="/movies/stars-1">&#60; 6</LinkElement>
                <LinkElement to="/movies/stars-2">6 &#8722; 8</LinkElement>
                <LinkElement to="/movies/stars-3">&#62; 8</LinkElement>
            </FilterByStarsElements>
        </FilterByStarsContainer>
    )
}

export default FilterByStars;
