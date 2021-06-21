import styled, { css } from "styled-components";
// import icons
import { ReactComponent as ToSee } from "../../assets/icons/movieCard/wantToSee.svg";
import { ReactComponent as Watched } from "../../assets/icons/movieCard/watched.svg";
import { ReactComponent as LoveIt } from "../../assets/icons/movieCard/loveIt.svg";

export const TitlePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.pages.background};
  flex-grow: 1;
`;

// Hero

export const HeroWrapper = styled.div`
  width: 100%;
  height: 25.5rem;
  margin: 2rem 0;
  background-color: #141414;

  @media (max-width: 1000px) {
    height: 20rem;
    margin: 1.8rem 0;
  }
  @media (max-width: 600px) {
    height: 18rem;
    margin: 1.4rem 0;
  }
  @media (max-width: 375px) {
    height: 14rem;
    margin: 1.2rem 0;
  }
`;

export const HeroContainer = styled.div`
  width: 88%;
  height: 100%;
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.bgImage});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 96%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const MainInformationContainer = styled.div`
  width: 60%;
  height: 67%;
  margin: 6rem 0 0 2rem;
  display: flex;

  & img {
    width: 12rem;
    height: 100%;
    margin-right: 1rem;
  }

  & .main-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & p {
      color: white;
      font-size: 1.7rem;
      margin-bottom: 0.8rem;

      & .year-link {
        text-decoration: none;
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    & .genre-links {
       display: flex;
       flex-wrap: wrap;

      & p{
         margin: 0;
      }

      & .genre-link {
        margin: 0rem 0.2rem;
        
        &:after {
          content: ", ";
        }
        &:last-of-type:after {
          content: "";
        }

        & a {
          text-decoration: none;
          color: white;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    width: 65%;
    height: 60%;
    margin: 6.5rem 0 0 2rem;

    & img {
      width: auto;
      height: auto;
      margin-right: 1rem;
    }

    & .main-info {
      & p {
        color: white;
        font-size: 1.3rem;
        margin-bottom: 0.6rem;
      }
    }
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 56%;
    margin: 7rem 0 0 0.8rem;

    & img {
      width: auto;
      height: auto;
      margin-right: 0.8rem;
    }

    & .main-info {
      & p {
        color: white;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  @media (max-width: 375px) {
    width: 90%;
    height: 65%;
    margin: 4rem 0 0 0.4rem;

    & img {
      width: auto;
      height: auto;
      margin-right: 0.8rem;
    }

    & .main-info {
      & p {
        color: white;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const SaveListContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: .4rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const IconStyle = css`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem 0.7rem;
  background-color: #000000;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 2.7rem;
    height: 2.7rem;
    padding: 0.3rem 0.6rem;
  }
  @media (max-width: 600px) {
    background-color: transparent;
    padding: 0;
    width: 2rem;
  }
`;

export const ToSeeIcon = styled(ToSee)`
  ${IconStyle}
  fill: ${(props) =>
    props.iconstyled === "true"
      ? props.theme.components.movieItem.saveButtons.wantToSee.second
      : props.theme.components.movieItem.saveButtons.wantToSee.first};

  &:hover {
    fill: ${(props) =>
      props.iconstyled === "true"
        ? props.theme.components.movieItem.saveButtons.wantToSee.third
        : props.theme.components.movieItem.saveButtons.wantToSee.second};
  }

  /* this prevents the button from remaining active on tablets or phones */
  @media (max-width: 900px) {
    &:hover {
      fill: ${(props) =>
        props.iconstyled === "true"
          ? props.theme.components.movieItem.saveButtons.wantToSee.second
          : props.theme.components.movieItem.saveButtons.wantToSee.first};
    }
  }
`;

export const WatchedIcon = styled(Watched)`
  ${IconStyle}
  fill: ${(props) =>
    props.iconstyled === "true"
      ? props.theme.components.movieItem.saveButtons.watched.second
      : props.theme.components.movieItem.saveButtons.watched.first};

  &:hover {
    fill: ${(props) =>
      props.iconstyled === "true"
        ? props.theme.components.movieItem.saveButtons.watched.third
        : props.theme.components.movieItem.saveButtons.watched.second};
  }

  /* this prevents the button from remaining active on tablets or phones */
  @media (max-width: 900px) {
    &:hover {
      fill: ${(props) =>
        props.iconstyled === "true"
          ? props.theme.components.movieItem.saveButtons.watched.second
          : props.theme.components.movieItem.saveButtons.watched.first};
    }
  }
`;

export const LoveItIcon = styled(LoveIt)`
  ${IconStyle}
  fill: ${(props) =>
    props.iconstyled === "true"
      ? props.theme.components.movieItem.saveButtons.loveIt.second
      : props.theme.components.movieItem.saveButtons.loveIt.first};

  &:hover {
    fill: ${(props) =>
      props.iconstyled === "true"
        ? props.theme.components.movieItem.saveButtons.loveIt.third
        : props.theme.components.movieItem.saveButtons.loveIt.second};
  }

  /* this prevents the button from remaining active on tablets or phones */
  @media (max-width: 900px) {
    &:hover {
      fill: ${(props) =>
        props.iconstyled === "true"
          ? props.theme.components.movieItem.saveButtons.loveIt.second
          : props.theme.components.movieItem.saveButtons.loveIt.first};
    }
  }
`;

export const ImdbContainer = styled.div`
  width: 18%;
  height: 40%;
  margin: 12rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  & p {
    color: white;
    margin: 0.3rem 0;
  }

  @media (max-width: 1000px) {
    margin: 10rem 1rem 0 0;

    & p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 600px) {
    display: none;
    font-size: 0.8rem;
  }
`;

export const ImdbNote = styled.div`
  text-align: center;
  margin: auto;

  & p {
    color: white;
    font-size: 1.6rem;
    border: 0.5rem solid #ffd700;
    border-radius: 15rem;
    margin: 0;
    padding: 0.9rem 0;
  }

  &::after {
    content: "IMDB NOTE";
    color: white;
  }

  @media (max-width: 1000px) {
    & p {
      width: 4rem;
      height: 4rem;
      color: white;
      font-size: 1.2rem;
      border: 0.35rem solid #ffd700;
      border-radius: 15rem;
      margin: auto;
    }

    &::after {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 600px) {
    & p {
      width: 3rem;
      height: 1.8rem;
      color: white;
      font-size: 1.2rem;
      border: none;
      padding: 0;
    }

    &::after {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 450px) {
    & p {
      height: 1.3rem;
      font-size: 0.9rem;
    }
  }
`;

// mobile extension hero

export const MobileImdbAndSaveListContainer = styled.div`
  display: none;
  width: 100%;
  height: 4.5rem;
  background-color: #141414;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    height: 3.8rem;
  }
`;

export const MobileSaveListContainer = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 450px) {
    width: 44%;
    margin-left: 0.6rem;
  }
`;

export const MobileImdbContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-right: 1rem;
  text-align: center;

  & p {
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    width: 55%;
    margin-right: 0.5rem;
    & p {
      font-size: 0.85rem;
    }
  }
`;

// Main

