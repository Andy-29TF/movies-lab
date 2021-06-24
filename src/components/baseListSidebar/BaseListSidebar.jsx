import React, {  useEffect } from 'react';
// hook, from react-responsive package.
import { useMediaQuery } from 'react-responsive';
// import for each filter component
import FilterByYear from '../filterComponents/filterByYear/FilterByYear';
import FilterByGenre from '../filterComponents/filterByGenre/FilterByGenre';
import FilterByStars from '../filterComponents/filterByStars/FilterByStars';
//* import the stylized  component
import { BaseListSidebarContainer, FilterList, CloseIcon} from './baseListSidebar.styles';

function BaseListSidebar(props) {
    const { handleDisplayFilterSettings, displayFilterSettings} = props;

    const isMobileBlsb = useMediaQuery({ query: `(min-width: 760px)` });
    // If you open the FilterSettings modal when the viewport is less than 768px 
    // and then return to a viewport greater than 768 the modal will close automatically
    useEffect(() => {
        if(isMobileBlsb  &&  displayFilterSettings ) {
            handleDisplayFilterSettings()
        }
    }, [ displayFilterSettings, handleDisplayFilterSettings, isMobileBlsb]);

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
