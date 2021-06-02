import React from 'react';
// import components
import WantToSeeSection from './wantToSeeSection/WantToSeeSection';
import WatchedSection from './watchedSection/WatchedSection';
import LoveItSection from './loveItSection/LoveItSection';
//* import the stylized  component
import { MyListDisplayContainer } from './myListDisplaySection.styles';

function MyListDisplaySection(props) {
    const { displayListCategory } = props;


    
    if( displayListCategory === "wantToSee" ) {
        return (
            <MyListDisplayContainer>
                <WantToSeeSection className="list-section"/>
            </MyListDisplayContainer>
        )
    }else if(displayListCategory === "watched") {
        return (
            <MyListDisplayContainer>
                <WatchedSection className="list-section"/>
            </MyListDisplayContainer>
        )
    }else {
        return (
            <MyListDisplayContainer>
                <LoveItSection className="list-section"/>
            </MyListDisplayContainer>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         globalStoreMoviesList: state.saveList
//     };
// }

export default MyListDisplaySection;
