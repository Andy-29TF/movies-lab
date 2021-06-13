import React, { useState, useEffect } from 'react';
// import for each filter component
import FilterByYear from '../filterComponents/filterByYear/FilterByYear';
import FilterByGenre from '../filterComponents/filterByGenre/FilterByGenre';
import FilterByStars from '../filterComponents/filterByStars/FilterByStars';
//* import the stylized  component
import { BaseListSidebarContainer, FilterList, CloseIcon} from './baseListSidebar.styles';

function BaseListSidebar(props) {
    const { handleDisplayFilterSettings, displayFilterSettings} = props;
    const [ viewportWidth, setViewportWidth ] = useState(window.innerWidth);
    // If you open the FilterSettings modal when the viewport is less than 768px 
    // and then return to a viewport greater than 768 the modal will close automatically
    useEffect(() => {
        const handleViewportResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleViewportResize);
        if(viewportWidth >= 768 &&  displayFilterSettings ) {
            handleDisplayFilterSettings()
        }

        return () => {
            window.addEventListener("resize", handleViewportResize);
          };
    }, [viewportWidth, displayFilterSettings, handleDisplayFilterSettings]);

    return (
        <BaseListSidebarContainer displayFilterSettings={displayFilterSettings}>
            <CloseIcon onClick={ () => handleDisplayFilterSettings() } />
            <FilterList>
                <FilterByGenre/>
                <FilterByYear/>
                <FilterByStars/>
            </FilterList>
        </BaseListSidebarContainer>
    )
}

export default BaseListSidebar;
