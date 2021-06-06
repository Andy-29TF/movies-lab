import React from 'react';
// import components
import Carousel from '../carousel/Carousel';
import HomeMovieRecommended from '../homeMovieRecommended/HomeMovieRecommended';
//* import the stylized  component
import { HomeRecommendationsContainer } from './homeRecommendationsSection.styles';

function HomeRecommendationsSection() {

    return (
        <HomeRecommendationsContainer>
            <Carousel/>
            <HomeMovieRecommended/>
        </HomeRecommendationsContainer>
    )
}

export default HomeRecommendationsSection;
