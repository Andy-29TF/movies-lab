import React from 'react';
// redux
import { connect } from 'react-redux';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import components
import NewsItem from '../../components/newsItem/NewsItem';
//* import the stylized  component
import { NewsPageContainer } from './news.styles';

function News(props) {
    const {news} = props;

    return (
        <Layout>
            <NewsPageContainer className="container-min-max-width">
                {
                    news.map( elem => <NewsItem newsContent={elem} key={elem.id}/>)
                }
            </NewsPageContainer>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        news: state.newsProcessing.news
    }
}

export default connect(mapStateToProps)(News);