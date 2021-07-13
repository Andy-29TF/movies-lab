import styled from "styled-components";

export const NewsPageContainer = styled.div `
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  background-color: ${(props) => props.theme.pages.background};
  flex-grow: 1;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem 0;
  }
  @media (max-width: 450px) {
    padding: 1.3rem 0;
  }
`;

//? content section
export const NewsSection = styled.section `
    width: 75%;
    height: auto;
    border-right: .3rem solid ${(props) => props.theme.pages.newsPage.borderLeftSection};

    @media (max-width: 1000px) {
        width: 100%;
        border-right: none;
    }
`;

export const Headline = styled.div `
    width: 96%;
    height: auto;
    margin: 0 auto;

    & img {
        width: 100%;
        height: 25rem;
        object-fit: cover;
    }

    & h1 {
        margin: .5rem .2rem;
        color: ${(props) => props.theme.pages.newsPage.color};
        line-height: 1.3;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.pages.newsPage.textDecorationColor};
        font-weight: bold;
        font-family: Para Supreme Regular,serif;
    }

    @media (max-width: 1000px) {
        & img {
            height: 22rem;
        }
    }
    @media (max-width: 650px) {
        & img {
            height: 14rem;
        }

        & h1 {
            font-size: 1.7rem;
        }
    }
    @media (max-width: 450px) {
        width: 100%;
        & img {
            height: 10rem;
        }

        & h1 {
            font-size: 1.5rem;
            margin: .5rem .7rem ;
        }
    }
`;

export const ArticleContent = styled.div `
    padding: 1.5rem 1rem 0 1.5rem;

    & p {
        font-size: 1.3rem;
        text-indent: .7rem;
        color: ${(props) => props.theme.pages.newsPage.color};
    }

    & img {
        width: 50%;
        height: 20rem;
        object-fit: cover;
        margin: 0 1.5rem 1rem 0;
        float: left;
    }

    @media (max-width: 1000px) {
        padding: 0 1rem;
    }

    @media (max-width: 650px) {
        & p {
            font-size: 1.1rem;
        }

        & img {
            float: none;
            width: 100%;
        }
    }
    @media (max-width: 450px) {
        padding: 0 .5rem;
        margin-top: 1.5rem;

        & p {
            font-size: .95rem;
        }

        & img {
            height: 13rem;
            object-position: 50% 10%;
        }
    }
`;

export const TrailerContainer = styled.div `
    width: 96%;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;

    & #title-container{
        width: 100%;
        border-bottom: 3px solid ${(props) => props.theme.pages.newsPage.borderBottom};
        filter: drop-shadow(.5rem .5rem 2px ${(props) => props.theme.pages.newsPage.dropShadow});
        -webkit-filter: drop-shadow(.5rem .5rem 2px ${(props) => props.theme.pages.newsPage.dropShadow});

        & h3 {
            text-transform: uppercase;
            font-size: 1.9rem;
            font-weight: 600;
            color: ${(props) => props.theme.pages.newsPage.color};
            margin: 0 2rem;
        }
    }

    & #trailer {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%;

        & iframe {
            padding: 1.3rem 0;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 650px) {
        
        & #title-container h3{
            font-size: 1.5rem;
            margin: 0 1.3rem;
        }
    }

    @media (max-width: 450px) {
        width: 99%;

        & #title-container{
            width: 98%;
            margin: 0 auto;
            & h3{
                font-size: 1.4rem;
                margin: 0 1.1rem;
            }
        } 

        & iframe {
            padding: 1rem 0;
        }
    }
`;

// ?news recommendations section

export const NewsRecommendationsSection = styled.section `
    width: 25%;
    height: auto;

    & h2 {
        margin-left: 1rem;
        color: ${(props) => props.theme.pages.newsPage.color};
        text-decoration: underline;
    }

    & > div {
        width: 92%;
        padding-left: 1rem;
        text-align: center;
        
        & #titleContainer {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 1000px) {
        width: 50%;
        margin: 2rem 1.5rem 0 1.5rem;
    }
    @media (max-width: 450px) {
        width: 70%;
        margin: 2rem 1rem 0 1rem;
    }
    @media (max-width: 450px) {
        width: 75%;
        margin: 1.5rem .6rem 0 .6rem;
    }
`;
