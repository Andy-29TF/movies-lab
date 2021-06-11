import React from 'react';
// import for each filter component
import FilterByYEar from '../filterComponents/filterByYear/FilterByYear';
//* import the stylized  component
import { BaseListSidebarContainer, FilterList } from './baseListSidebar.styles';

function BaseListSidebar() {
    return (
        <BaseListSidebarContainer >
            <FilterList>
                <FilterByYEar/>
            </FilterList>
        </BaseListSidebarContainer>
    )
}

export default BaseListSidebar;
