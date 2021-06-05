import React from 'react';
// redux
import { connect } from 'react-redux';
// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//* import the stylized  component
import { CarouselContainer, CarouselElement } from './carousel.styles';

function Carousel(props) {
    const { moviesForTheCarousel } = props;
    
    // carousel settings
    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        appendDots: dots => (
            <div
              style={{
                  bottom: ".7rem",
                  left: "50%",
                  transform: "translate(-50%)",
                  width: "auto",
                  background: "#c5c1c0", 
                  borderRadius: "10rem"
              }}
            >
              <ul style={{ margin: "0", padding: "0",height: "1rem" }}> 
                <button 
                    style={{ 
                        margin:"0", 
                        padding: "0", 
                        border: "none", 
                        background: "transparent",
                        transform: "translateY(-30%)"
                    }}>
                    {dots} 
                </button>
              </ul>
            </div>
          )
      };

      function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "absolute", top: "50%", right: "0", marginRight: ".5rem"}}
            onClick={onClick}
          />
        );
      }
      function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "absolute", zIndex: "1", top: "50%", left: "0", marginLeft: ".5rem"}}
            onClick={onClick}
          />
        );
      }


    return (
        <CarouselContainer >
                <span className="frame-title">the most viewed</span>
                <Slider {...settings} className="carousel-slider">
                    {
                        moviesForTheCarousel.map( elem => {
                            return(
                                <CarouselElement>
                                    <img src={elem.landscapeCover} alt={`Cover for ${elem.name}`}></img>
                                </CarouselElement>
                            )
                        })
                    }
                </Slider>
        </CarouselContainer>
    )
}

function mapStateToProps(state) {
    const idsForFiltering = [35, 38, 37, 48, 51];
    return {
        moviesForTheCarousel: state.moviesProcessing.rawMovies.filter(elem => idsForFiltering.includes(elem.id) )
    }
}

export default connect(mapStateToProps)(Carousel);
