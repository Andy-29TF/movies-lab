import React, { useState } from 'react';
// route
import { Link } from 'react-router-dom';
// import the modal for the nav
import ModalMobileNavbar from './modalMobileNavbar/ModalMobileNavbar';
// importlogo 
import logo from '../../assets/images/logo.png';
//* import the stylized  component
import { MobileNavbarContainer, NavbarMenuIcon, NavbarSearchIcon, NavbarCloseIcon } from './mobileNavbar.styles';


function MobileNavbar() {
    const [displayModal, setDisplayModal] = useState(false);

    const handleCleanup = function(event) {
        if (window.location.href === event.target.href) {
            setDisplayModal(state => !state);
            event.preventDefault();
        }
      }

    return (
        <MobileNavbarContainer className="container-min-max-width" >
            <NavbarSearchIcon onClick={() => setDisplayModal(state => state && false)}/>
            <Link to='/' onClick={() => setDisplayModal(state => state && false)}>
                <img src={logo} alt="logo" />
            </Link>
            <div className="div-menu-icon" >
                {
                    displayModal 
                        ?<NavbarCloseIcon  onClick={() => setDisplayModal(state => !state)}/>
                        :<NavbarMenuIcon  onClick={() => setDisplayModal(state => !state)}/>
                }
            </div>
            <ModalMobileNavbar className="modal-mobile-navbar" displayModal={displayModal}  handleCleanup={handleCleanup}></ModalMobileNavbar>
        </MobileNavbarContainer>
    )
}

export default MobileNavbar;
