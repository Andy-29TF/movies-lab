import React from 'react';
// react-slick
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
//* import the stylized  component
import { MessageSlotContainer, SlotPiece } from './messageSlot.styles';

function MessageSlot() {
    const bannerMessages = [
        { comingSoon: "Fast & Furious 9 (2021)" },
        { comingSoon: "Black Widow (2021)" },
        { comingSoon: "The Suicide Squad (2021)" },
        { comingSoon: "Venom (2021)" },
        { comingSoon: "No Time to Die (2021)" },
        { comingSoon: "Eternals (2021)" },
        { comingSoon: "Top Gun: Maverick (2021)" },
        { comingSoon: "The Matrix 4 (2021)" },
        { comingSoon: "The King's Man (2021)" },
        { comingSoon: "Morbius (2022)" }
    ];

    // carousel settings
    const settings = {
        dots: false,
        arrows: false,
        pauseOnHover: false,
        draggable: false,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
      };

    return (
        <MessageSlotContainer>
            <Slider {...settings} className="message-slot-carousel">
                {
                    bannerMessages.map( elem => {
                        return(<SlotPiece><p><span>coming soon &#8226;</span> {elem.comingSoon} </p></SlotPiece> )
                    })
                }
            </Slider>
        </MessageSlotContainer>
    )
}

export default MessageSlot;
