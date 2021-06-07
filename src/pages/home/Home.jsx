import React from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import components
import HomeRecommendationsSection from '../../components/homeRecommendationsSection/HomeRecommendationsSection';
import HomeLatestMoviesSection from '../../components/homeLatestMoviesSection/HomeLatestMoviesSection';
//* import the stylized  component
import { HomeContainer } from './home.styles';

function Home() {
    return (
        <Layout>
            <HomeContainer className="container-min-max-width">
                <HomeRecommendationsSection/>
                <HomeLatestMoviesSection/>
            </HomeContainer>
        </Layout>
    )
}

export default Home;
