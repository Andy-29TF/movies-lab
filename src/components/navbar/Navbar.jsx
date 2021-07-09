import React, {useEffect} from 'react';
// redux
import { connect } from 'react-redux';
import { toggleSearchBar } from '../../redux/actions/searchBar'
// route
import { Link, useLocation } from 'react-router-dom';
// importlogo 
import logo from '../../assets/images/logo.png';
//* import the stylized  component
import {
    NavbarContainer,
    NavbarLink,
    NavbarSearchIcon,
} from './navbar.styles';


function Navbar(props) {
    const { toggleSearchBar } = props;
    // router
    const location = useLocation();

    useEffect(() => {
        toggleSearchBar({ searchBarInstructions: "close shearch bar" })
    }, [location, toggleSearchBar])

    const handleCleanup = function(event) {
        toggleSearchBar({ searchBarInstructions: "close shearch bar" })
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
                <NavbarLink to='/movies/unfiltered' onClick={(event) => handleCleanup(event)}>Movies</NavbarLink>
            </div>
            <div className="navbar-right-side">
                <NavbarLink to='/my-list' onClick={(event) => handleCleanup(event)}>My List</NavbarLink>
                <NavbarSearchIcon onClick={toggleSearchBar}/>
            </div>
    </NavbarContainer>
    )
}

function dispatchStateToProps(dispatch) {
    return {
        toggleSearchBar: (payload) => dispatch(toggleSearchBar(payload))
    }
}

export default connect(null, dispatchStateToProps)(Navbar);
