import styled, { css } from 'styled-components';

export const MyListContainer = styled.div `
   width: 100%;
   height: 100%;
   background-color: ${ props => props.theme.pages.background};
   flex-grow: 1;
`;

// ?  SectionBar
export const SectionBar = styled.div `
    position: relative;
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 3rem 2rem 0 2rem;

    & .selected-category {
        background-color: ${ props => props.theme.pages.myListPage.sectionBar.selector.selected.background};
        transform: scaleY(1.10) scaleX(1.06);
        transform-origin: bottom center;
        letter-spacing: .2rem;
    }

    &:before {
        content: "";
        width: 100%;
        height: .4rem;
        position: absolute;
        bottom: -.4rem;
        left: 0;
        background-color: ${ props => props.theme.pages.myListPage.sectionBar.borderBottom};
    }

    @media (max-width: 768px) {
        margin: 1.5rem .2rem 0 .2rem;

        & .selected-category {
            transform: scaleY(1.1) scaleX(1.06);
            letter-spacing: .15rem;
        }
    }
    @media (max-width: 545px) {
        & .selected-category {
            transform: scaleY(1.1) scaleX(1.06);
            letter-spacing: .05rem;
        }
    }
`;

export const SectionSelectorUnselected = css `
    width: 32%;
    height: 3.5rem;
    display: flex;
    align-content: center;
    justify-content: center;
    margin:  0 .1rem;
    cursor: pointer;
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: ${ props => props.theme.pages.myListPage.sectionBar.selector.unselected.background};
    transition: all ease .4s;

    & .section-bar-icon {
        width: 2.6rem;
        height: 2.6rem;
        margin: auto 0;
    }

    & p {
        font-size: 1.8rem;
        text-transform: uppercase;
        margin: auto .5rem;
    }

    &:hover {
        
        background-color: ${ props => props.theme.pages.myListPage.sectionBar.selector.unselected.hover.background};
        transform: scaleY(1.20) scaleX(1.1);
        transform-origin: bottom center;
        letter-spacing: .3rem;
    }

    @media (max-width: 768px) {
        width: 32.5%;
        
        & .section-bar-icon {
            max-width: 2.2rem;
            max-height: 2.2rem;
        }

        & p {
            font-size: 1.4rem;
            margin: auto .3rem;
        }

        &:hover {
            letter-spacing: 0;
            background-color: ${ props => props.theme.pages.myListPage.sectionBar.selector.unselected.hover.mobile.background};
            transform: scaleY(1.10) scaleX(1.06);
        }

    }

    @media (max-width: 545px) {
        & .section-bar-icon {
            max-width: 1.3rem;
            max-height: 1.3rem;
        }

        & p {
            font-size: 1.1rem;
            margin: auto .1rem;
        }

        &:hover {
            letter-spacing: 0;
            background-color: ${ props => props.theme.pages.myListPage.sectionBar.selector.unselected.hover.mobile.background};
            transform: scaleY(1.10) scaleX(1.06);
        }
    }
`;

export const SectionSelectorWantToSee = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: ${ props => props.theme.pages.myListPage.sectionBar.selector.wantToSee.colorAndFill};
    }
    & p {
        color: ${ props => props.theme.pages.myListPage.sectionBar.selector.wantToSee.colorAndFill};
    }
`;
export const SectionSelectorWatched = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: ${ props => props.theme.pages.myListPage.sectionBar.selector.watched.colorAndFill};
    }

    & p {
        color: ${ props => props.theme.pages.myListPage.sectionBar.selector.watched.colorAndFill};
    }
`;
export const SectionSelectorLoveIt = styled.div `
    ${SectionSelectorUnselected}

    & .section-bar-icon{
        fill: ${ props => props.theme.pages.myListPage.sectionBar.selector.loveIt.colorAndFill};
    }

    & p {
        color: ${ props => props.theme.pages.myListPage.sectionBar.selector.loveIt.colorAndFill};
    }
`;
