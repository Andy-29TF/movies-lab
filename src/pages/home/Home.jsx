import React from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
//* import the stylized  component
import { HomeContainer } from './home.styles';

function Home() {
    return (
        <Layout>
            <HomeContainer className="container-min-max-width">
                <p>Home</p>
                
            </HomeContainer>
        </Layout>
    )
}

export default Home;
