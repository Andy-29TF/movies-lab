import React from 'react';
// router
import { Link } from 'react-router-dom';
// import react-lazyload component
import LazyLoad from 'react-lazyload';
//* import the stylized  component
import { NewsItemContainer } from './newsItem.styles';

function NewsItem(props) {
    const { hero, title, id} = props.newsContent

    return (
        <NewsItemContainer>
            <Link to={`/news/${id}`}>
                <LazyLoad className="image-container" height={'100%'} offset={200} >
                    <img src={hero} alt={title}/>
                </LazyLoad>
                <div id="titleContainer">{title}</div>
            </Link>
        </NewsItemContainer>
    )
}

export default NewsItem;
