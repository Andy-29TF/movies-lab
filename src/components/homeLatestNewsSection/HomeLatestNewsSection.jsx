import React, { useRef } from 'react';
// redux
import { connect } from 'react-redux';
// import component
import NewsItem from '../newsItem/NewsItem';
//* import the stylized  component
import { HomeLatestNewsContainer, SectionTitleContainer, ScrollIcon, WrapperContainer, SlideArrow } from './homeLatestNewsSection.styles';
// img
import Arrow from'../../assets/icons/homePage/right-arrow.png'

function HomeLatestNewsSection(props) {
    const { newsForLatestNewsSection } = props;
    const wrapperContainer = useRef()

    const scroll = (scrollOffset) => {
        wrapperContainer.current.scrollLeft += scrollOffset;
    }

    return (
        <HomeLatestNewsContainer>
            <SlideArrow arrow={Arrow} leftD={true} onClick={() => scroll(-200)}/>
            <SectionTitleContainer>
                <p className="section-title">latest news</p>
                <ScrollIcon/>
            </SectionTitleContainer>
            <WrapperContainer ref={wrapperContainer}>
                
                {
                    newsForLatestNewsSection.map( elem => <NewsItem newsContent={elem} key={elem.id}/> )
                }
            </WrapperContainer>
            <SlideArrow arrow={Arrow} onClick={() => scroll(200)}/>
        </HomeLatestNewsContainer>
    )
}

function mapStateToProps(state) {
    return {
        newsForLatestNewsSection: state.newsProcessing.news
    }
}

export default connect(mapStateToProps)(HomeLatestNewsSection);
