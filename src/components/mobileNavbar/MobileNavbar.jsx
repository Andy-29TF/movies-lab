import React, { useState, useEffect } from 'react';
// redux
import { connect } from 'react-redux';
import { toggleSearchBar } from '../../redux/actions/searchBar'
// route
import { Link, useLocation } from 'react-router-dom';
// import the modal for the nav
import ModalMobileNavbar from './modalMobileNavbar/ModalMobileNavbar';
// importlogo 
import logo from '../../assets/images/logo.png';
//* import the stylized  component
import { MobileNavbarContainer, NavbarMenuIcon, NavbarSearchIcon, NavbarCloseIcon } from './mobileNavbar.styles';


function MobileNavbar(props) {
    const { toggleSearchBar, searchBarIsActivated} = props;
    const [displayModal, setDisplayModal] = useState(false);
    // router
    const location = useLocation();

    useEffect(() => {
        toggleSearchBar({ searchBarInstructions: "close shearch bar" })
    }, [location, toggleSearchBar])

    useEffect(() => {
        displayModal 
            ? document.body.style.overflow = 'hidden' 
            : document.body.style.overflow = 'unset'
     }, [ displayModal ]);

    const handleCleanup = function(event) {
        toggleSearchBar({ searchBarInstructions: "close shearch bar" })
        if (window.location.href === event.target.href) {
            setDisplayModal(state => !state);
            event.preventDefault();
        }
      }

    return (
        <MobileNavbarContainer className="container-min-max-width" >
            <NavbarSearchIcon onClick={() => {
                setDisplayModal(state => state && false);
                toggleSearchBar({})
            }}
            searchbarstatus={`${searchBarIsActivated}`}
            />
            <Link to='/' onClick={() =>{ 
                setDisplayModal(state => state && false)
                toggleSearchBar({ searchBarInstructions: "close shearch bar" })
            }}>
                <img src={logo} alt="logo" />
            </Link>
            <div className="div-menu-icon" >
                {
                    displayModal 
                        ?<NavbarCloseIcon  onClick={() =>  setDisplayModal(state => !state)}/>
                        :<NavbarMenuIcon  onClick={() => {
                            setDisplayModal(state => !state)
                            window.scroll(0, 0)
                            toggleSearchBar({ searchBarInstructions: "close shearch bar" })
                        }}/>
                }
            </div>
            <ModalMobileNavbar className="modal-mobile-navbar" displayModal={displayModal}  handleCleanup={handleCleanup}></ModalMobileNavbar>
        </MobileNavbarContainer>
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

export default connect(mapStateToProps, dispatchStateToProps)(MobileNavbar);
