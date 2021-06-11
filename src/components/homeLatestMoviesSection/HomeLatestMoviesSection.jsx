import React from 'react';
// redux
import { connect } from 'react-redux';
// import component
import MovieItem from '../movieItem/MovieItem';
//* import the stylized  component
import { HomeLatestMoviesContainer, SectionTitleContainer, ScrollIcon, WrapperContainer } from './homeLatestMoviesSection.styles';

function HomeLatestMoviesSection(props) {
    const { moviesForLatestMoviesSection } = props;

    return (
        <HomeLatestMoviesContainer>
            <SectionTitleContainer>
                <p className="section-title">latest movies</p>
                <ScrollIcon/>
            </SectionTitleContainer>
            <WrapperContainer>
                {
                    moviesForLatestMoviesSection.map( elem =>{
                        return(
                            <MovieItem individualMovie={elem} key={elem.id}/>
                        )
                    })
                }
            </WrapperContainer>
        </HomeLatestMoviesContainer>
    )
}

function mapStateToProps(state) {
    return {
        moviesForLatestMoviesSection: state.moviesProcessing.rawMovies.slice(0, 10)
    }
}

export default connect(mapStateToProps)(HomeLatestMoviesSection);
