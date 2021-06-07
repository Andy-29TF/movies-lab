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
 }

export default MyListDisplaySection;
