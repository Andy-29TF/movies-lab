import React from 'react';
// import components
import WantToSeeSection from './wantToSeeSection/WantToSeeSection';
import WatchedSection from './watchedSection/WatchedSection';
import LoveItSection from './loveItSection/LoveItSection';
//* import the stylized  component
import { MyListDisplayContainer } from './myListDisplaySection.styles';

function MyListDisplaySection(props) {
    const { displayListCategory } = props;


    return(
        <MyListDisplayContainer>
            {
                displayListCategory === "wantToSee" && <WantToSeeSection />
            }
            {
                displayListCategory === "watched" && <WatchedSection />
            }
            {
                displayListCategory === "loveIt" && <LoveItSection />
            }
        </MyListDisplayContainer>
    )
    // if( displayListCategory === "wantToSee" ) {
    //     return (
    //         <MyListDisplayContainer>
    //             <WantToSeeSection />
    //         </MyListDisplayContainer>
    //     )
    // }else if(displayListCategory === "watched") {
    //     return (
    //         <MyListDisplayContainer>
    //             <WatchedSection />
    //         </MyListDisplayContainer>
    //     )
    // }else {
    //     return (
    //         <MyListDisplayContainer>
    //             <LoveItSection />
    //         </MyListDisplayContainer>
    //     )
    // }
}

// function mapStateToProps(state) {
//     return {
//         globalStoreMoviesList: state.saveList
//     };
// }

export default MyListDisplaySection;
