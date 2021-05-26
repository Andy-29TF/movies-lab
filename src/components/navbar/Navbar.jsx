import React from 'react';
// route
import { Link } from 'react-router-dom';
// importlogo 
import logo from '../../assets/images/logo.png';
//* import the stylized  component
import {
    NavbarContainer,
    NavbarLink,
    NavbarSearchIcon,
} from './navbar.styles';


function Navbar() {
    return (
        <NavbarContainer className="container-min-max-width" >
            <div className="navbar-left-side">
                <Link to='/'>
                    <img src={logo} alt="logo"></img>
                </Link>
                <NavbarLink to='/news'>News</NavbarLink>
                <NavbarLink to='/movies' >Movies</NavbarLink>
            </div>
            <div className="navbar-right-side">
                <NavbarLink to='/my-list'>My List</NavbarLink>
                <NavbarLink to='/'>Sign In</NavbarLink>
                <NavbarSearchIcon/>
            </div>
    </NavbarContainer>
    )
}

export default Navbar;
