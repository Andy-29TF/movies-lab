import React from 'react';
// hook, from react-responsive package.
import { useMediaQuery } from 'react-responsive';
// import components
import Navbar from '../navbar/Navbar';
import MobileNavbar from '../mobileNavbar/MobileNavbar';
//* import the stylized  component
import { HeaderContainer } from './header.styles';

function Header(){

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

        return (
            <HeaderContainer>
                {
                    isMobile
                        ? <MobileNavbar className="mobile-navbar"/>
                        : <Navbar className="container-min-max-width navbar"/>
                }
            </HeaderContainer>
        )
}

export default Header;
