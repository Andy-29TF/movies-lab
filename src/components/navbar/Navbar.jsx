import React, {useEffect} from 'react';
// redux
import { connect } from 'react-redux';
import { toggleSearchBar } from '../../redux/actions/searchBar'
// route
import { Link, useLocation } from 'react-router-dom';
// importlogo 
import logo from '../../assets/images/logo.png';
// import Toggle Theme Button
import ToggleThemeBtn from '../toggleThemeBtn/ToggleThemeBtn'
//* import the stylized  component
import {
    NavbarContainer,
    NavbarLink,
    NavbarSearchIcon,
} from './navbar.styles';


function Navbar(props) {
    const { toggleSearchBar, searchBarIsActivated } = props;
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
                <NavbarLink to='/news-list' onClick={(event) => handleCleanup(event)}>News</NavbarLink>
                <NavbarLink to='/movies/unfiltered' onClick={(event) => handleCleanup(event)}>Movies</NavbarLink>
                <NavbarLink to='/my-list' onClick={(event) => handleCleanup(event)}>My List</NavbarLink>
            </div>
            <div className="navbar-right-side">
                <ToggleThemeBtn/>
                <NavbarSearchIcon onClick={toggleSearchBar} searchbarstatus={`${searchBarIsActivated}`}/>
            </div>
    </NavbarContainer>
    )
}

function mapStateToProps(state) {
    return {
        searchBarIsActivated: state.searchBar.searchBarIsActivated
    }
}

function dispatchStateToProps(dispatch) {
    return {
        toggleSearchBar: (payload) => dispatch(toggleSearchBar(payload))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Navbar);
