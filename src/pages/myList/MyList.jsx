import React from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
//* import the stylized  component
import { 
        MyListContainer, 
        SectionBar, 
        SectionSelectorWantToSee, 
        SectionSelectorWatched, 
        SectionSelectorLoveIt,
        SavedMoviesDisplaySection 
    } from './myList.styles';
// 
import { ReactComponent as ToSee } from '../../assets/icons/movieCard/wantToSee.svg';
import { ReactComponent as Watched } from '../../assets/icons/movieCard/watched.svg';
import { ReactComponent as LoveIt } from '../../assets/icons/movieCard/loveIt.svg';


function MyList() {
    return (
        <Layout>
            <MyListContainer className="container-min-max-width">
                <SectionBar >
                    <SectionSelectorWantToSee>
                        <ToSee className="section-bar-icon"/>
                        <p>to see</p>
                    </SectionSelectorWantToSee>
                    <SectionSelectorWatched>
                        <Watched className="section-bar-icon"/>
                        <p>watched</p>
                    </SectionSelectorWatched>
                    <SectionSelectorLoveIt>
                        <LoveIt className="section-bar-icon"/>
                        <p>love it</p>
                    </SectionSelectorLoveIt>
                </SectionBar>
                
                <SavedMoviesDisplaySection className="container-min-max-width">
                    
                </SavedMoviesDisplaySection>
            </MyListContainer>
        </Layout>
    )
}

export default MyList;