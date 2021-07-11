import React, { useState, useEffect, useRef } from 'react';
// redux
import { connect } from 'react-redux';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import component
import NewsItem from '../../components/newsItem/NewsItem'
//* import the stylized  component
import { 
    NewsPageContainer, 
    NewsSection, 
    Headline, 
    ArticleContent, 
    NewsRecommendationsSection,
    TrailerContainer
} from './newsPage.styles';

function NewsPage(props) {
    const { newsById, availableIds, history, rndNews } = props;
    const [newsByIdIsAvailable, setNewsByIdIsAvailable] = useState(false);
    // * control for the first render
    const firstUpdate = useRef(true);

    console.log(rndNews)

    useEffect(() => {
        if(newsById.length > 0) {
            setNewsByIdIsAvailable(true);
        }
    }, [ newsById.length])

    // * redirects to page404 if the path does not match
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        }else if (availableIds.length > 0 && !newsByIdIsAvailable){
            !availableIds.includes(+props.match.params.id) && history.push("/page-404")
        }
    }, [availableIds, history, newsByIdIsAvailable, props.match.params.id])
    
    return (
        <Layout>
            {
                newsByIdIsAvailable 
                    && 
                <NewsPageContainer className="container-min-max-width">
                    <NewsSection>
                        <Headline>
                            <img src={newsById[0].hero} alt={newsById[0].title + newsById[0].id}/>
                            <h1>{newsById[0].title}</h1>
                        </Headline>
                        <ArticleContent>
                            <p>{newsById[0].p1}</p>
                            <p>{newsById[0].p2}</p>
                            <img src={newsById[0].image} alt={newsById[0].title}/>
                            <p>{newsById[0].p3}</p>
                            <p>{newsById[0].p4}</p>
                        </ArticleContent>
                        <TrailerContainer>
                            <div id="title-container">
                                <h3>Trailer</h3>
                            </div>
                            <div id="trailer">
                                <iframe width="854" height="520" src={newsById[0].trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </TrailerContainer>
                    </NewsSection>
                    <NewsRecommendationsSection>
                        <h2>Must Read</h2>
                        <NewsItem newsContent={rndNews[0]}/>
                    </NewsRecommendationsSection>
                </NewsPageContainer>
            }
            
        </Layout>
    )
}

function mapStateToProps(state, props) {
    const news_id = props.match.params.id;
    const rndInt = Math.floor(Math.random() * state.newsProcessing.news.length) + 1;

    return {
        newsById: state.newsProcessing.news.filter( elem => elem.id === +news_id ),
        availableIds: state.newsProcessing.news.map( elem => elem.id ),
        rndNews: state.newsProcessing.news.filter( elem => elem.id === rndInt)
    }
}

export default connect(mapStateToProps)(NewsPage);
