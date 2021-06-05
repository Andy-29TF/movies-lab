import React from 'react';
// import components
import Carousel from '../carousel/Carousel'
//* import the stylized  component
import { HomeRecommendationsContainer } from './homeRecommendationsSection.styles';

function HomeRecommendationsSection() {

    return (
        <HomeRecommendationsContainer>
            <Carousel/>
        </HomeRecommendationsContainer>
    )
}

export default HomeRecommendationsSection;
