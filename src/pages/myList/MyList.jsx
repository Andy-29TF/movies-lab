import React, {useState, useEffect} from 'react';
// LAYOUT - header & footer
import Layout from '../../components/layout/Layout';
// import components
import MyListDisplaySection from '../../components/myListDisplaySection/MyListDisplaySection';
//* import the stylized  component
import { 
        MyListContainer, 
        SectionBar, 
        SectionSelectorWantToSee, 
        SectionSelectorWatched, 
        SectionSelectorLoveIt,
    } from './myList.styles';
// icons
import { ReactComponent as ToSee } from '../../assets/icons/movieCard/wantToSee.svg';
import { ReactComponent as Watched } from '../../assets/icons/movieCard/watched.svg';
import { ReactComponent as LoveIt } from '../../assets/icons/movieCard/loveIt.svg';


function MyList() {
    const [displayListCategory, setDisplayListCategory] = useState("wantToSee");
    const [selectorStyleForWantToSee, setSelectorStyleForWantToSee] = useState("");
    const [selectorStyleForWatched, setSelectorStyleForWatched] = useState("");
    const [selectorStyleForLoveIt, setSelectorStyleForLoveIt] = useState("");

    useEffect(() => {
        if(displayListCategory === "wantToSee") {
            setSelectorStyleForWantToSee("selected-category")
            setSelectorStyleForWatched(null);
            setSelectorStyleForLoveIt(null);
        }
        if(displayListCategory === "watched") {
            setSelectorStyleForWatched("selected-category")
            setSelectorStyleForWantToSee(null);
            setSelectorStyleForLoveIt(null);
        }
        if(displayListCategory === "loveIt") {
            setSelectorStyleForLoveIt("selected-category")
            setSelectorStyleForWantToSee(null);
            setSelectorStyleForWatched(null);
        }
    }, [displayListCategory])

    return (
        <Layout>
            <MyListContainer className="container-min-max-width">
                <SectionBar >
                    <SectionSelectorWantToSee className={selectorStyleForWantToSee} onClick={() => {setDisplayListCategory("wantToSee")}}>
                        <ToSee className="section-bar-icon"/>
                        <p>to see</p>
                    </SectionSelectorWantToSee>
                    <SectionSelectorWatched className={selectorStyleForWatched} onClick={() => {setDisplayListCategory("watched")}}>
                        <Watched className="section-bar-icon"/>
                        <p>watched</p>
                    </SectionSelectorWatched>
                    <SectionSelectorLoveIt className={selectorStyleForLoveIt} onClick={() => {setDisplayListCategory("loveIt")}}>
                        <LoveIt className="section-bar-icon"/>
                        <p>love it</p>
                    </SectionSelectorLoveIt>
                </SectionBar>
                
                <MyListDisplaySection className="container-min-max-width" displayListCategory={displayListCategory}>
                    
                </MyListDisplaySection>
            </MyListContainer>
        </Layout>
    )
}

export default MyList;