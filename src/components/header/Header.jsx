import React, { useState, useEffect } from 'react';
//? import the component with the navbar for...
//? window.width > 768
import Navbar from '../navbar/Navbar';
//? and window.width < 768
import MobileNavbar from '../mobileNavbar/MobileNavbar';
//* import the stylized  component
import { HeaderContainer } from './header.styles';

function Header(){
    const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // If you open the modal menu when the viewport is less than 768px 
    // and then return to a viewport greater than 768 the modal will close automatically
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        if(windowWidth <= 768 ) {
            setDisplayMobileNavbar(true);
        }else {
            setDisplayMobileNavbar(false);
        }

        return () => {
            window.addEventListener("resize", handleResize);
          };

    }, [windowWidth]);

    

        return (
            <HeaderContainer>
                {
                    displayMobileNavbar
                        ? <MobileNavbar className="mobile-navbar"/>
                        : <Navbar className="container-min-max-width navbar"/>
                }
            </HeaderContainer>
        )
}

export default Header;
