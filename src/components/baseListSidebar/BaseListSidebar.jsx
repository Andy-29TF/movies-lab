import React from 'react';
// import for each filter component
import FilterByYear from '../filterComponents/filterByYear/FilterByYear';
import FilterByGenre from '../filterComponents/filterByGenre/FilterByGenre';
import FilterByStars from '../filterComponents/filterByStars/FilterByStars';
//* import the stylized  component
import { BaseListSidebarContainer, FilterList} from './baseListSidebar.styles';

function BaseListSidebar() {

    return (
        <BaseListSidebarContainer >
            <FilterList>
                <FilterByGenre/>
                <FilterByYear/>
                <FilterByStars/>
            </FilterList>
        </BaseListSidebarContainer>
    )
}

export default BaseListSidebar;
