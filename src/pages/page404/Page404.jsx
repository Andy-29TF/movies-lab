import React from 'react';
// router
import { Link } from 'react-router-dom';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
//* import the stylized  component
import { ErrorPageContainer } from './page404.styles'

function Page404() {
    return(
        <Layout>
            <ErrorPageContainer className="container-min-max-width">
                <h1>Whoops!</h1>
                <h4>404 Page Not Found</h4>
                <img src="https://i.imgur.com/ttP0sEJ.gif" alt="page404"/>
                <h2>Looks like this page went on vacation.</h2>
                <p>Try our <Link to="/">homepage</Link> or <Link to="/movies/unfiltered">movies</Link> instead.</p>
            </ErrorPageContainer>
        </Layout>
    );
}

export default Page404;