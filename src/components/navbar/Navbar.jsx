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

    const handleCleanup = function(event) {
        if (window.location.href === event.target.href) {
            event.preventDefault();
        }
    }

    return (
        <NavbarContainer className="container-min-max-width" >
            <div className="navbar-left-side">
                <Link to='/' onClick={(event) => handleCleanup(event)}>
                    <img src={logo} alt="logo"></img>
                </Link>
                <NavbarLink to='/news' onClick={(event) => handleCleanup(event)}>News</NavbarLink>
                <NavbarLink to='/movies' onClick={(event) => handleCleanup(event)}>Movies</NavbarLink>
            </div>
            <div className="navbar-right-side">
                <NavbarLink to='/my-list' onClick={(event) => handleCleanup(event)}>My List</NavbarLink>
                <NavbarLink to='/' onClick={(event) => handleCleanup(event)}>Sign In</NavbarLink>
                <NavbarSearchIcon/>
            </div>
    </NavbarContainer>
    )
}

export default Navbar;
