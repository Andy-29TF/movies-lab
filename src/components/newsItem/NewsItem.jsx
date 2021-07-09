import React from 'react';
//* import the stylized  component
import { NewsItemContainer } from './newsItem.styles';

function NewsItem(props) {
    const { hero, title} = props.newsContent

    return (
        <NewsItemContainer>
            <img src={hero} alt={title}/>
            <p>{title}</p>
        </NewsItemContainer>
    )
}

export default NewsItem;
