import React, { useRef } from 'react';
// redux
import { connect } from 'react-redux';
// import component
import MovieItem from '../movieItem/MovieItem';
//* import the stylized  component
import { HomeLatestMoviesContainer, SectionTitleContainer, ScrollIcon, WrapperContainer, SlideArrow } from './homeLatestMoviesSection.styles';
// img
import Arrow from'../../assets/icons/homePage/right-arrow.png'

function HomeLatestMoviesSection(props) {
    const { moviesForLatestMoviesSection } = props;
    const wrapperContainer = useRef()

    const scroll = (scrollOffset) => {
        wrapperContainer.current.scrollLeft += scrollOffset;
    }

    return (
        <HomeLatestMoviesContainer>
            <SlideArrow arrow={Arrow} leftD={true} onClick={() => scroll(-200)}/>
            <SectionTitleContainer>
                <p className="section-title">latest movies</p>
                <ScrollIcon/>
            </SectionTitleContainer>
            <WrapperContainer ref={wrapperContainer}>
                
                {
                    moviesForLatestMoviesSection.map( elem =>{
                        return(
                            <MovieItem individualMovie={elem} key={elem.id}/>
                        )
                    })
                }
            </WrapperContainer>
            <SlideArrow arrow={Arrow} onClick={() => scroll(200)}/>
        </HomeLatestMoviesContainer>
    )
}

function mapStateToProps(state) {
    return {
        moviesForLatestMoviesSection: state.moviesProcessing.rawMovies.slice(0, 10)
    }
}

export default connect(mapStateToProps)(HomeLatestMoviesSection);
