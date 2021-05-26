import React from 'react';
//? import the component with the navbar for...
//? window.width > 768
import Navbar from '../navbar/Navbar';
//? and window.width < 768
import MobileNavbar from '../mobileNavbar/MobileNavbar';
//* import the stylized  component
import { HeaderContainer } from './header.styles';

function Header(){
        return (
            <HeaderContainer>
                <Navbar className="container-min-max-width"/>
                <MobileNavbar/>
            </HeaderContainer>
        )
}

export default Header;
