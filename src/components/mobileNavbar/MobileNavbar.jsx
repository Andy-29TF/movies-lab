import React, {useState, useEffect } from 'react';
// route
import { Link } from 'react-router-dom';
// importlogo 
import logo from '../../assets/images/logo.png';
//* import the stylized  component
import { MobileNavbarContainer, NavbarMenuIcon, NavbarSearchIcon, NavbarCloseIcon } from './mobileNavbar.styles';
// import the modal for the nav
import ModalMobileNavbar from './modalMobileNavbar/ModalMobileNavbar';


function MobileNavbar() {
    const [displayModal, setDisplayModal] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // If you open the modal menu when the viewport is less than 768px 
    // and then return to a viewport greater than 768 the modal will close automatically
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        if(windowWidth > 768 && displayModal === true) {
            setDisplayModal(false);
        }
    }, [windowWidth, displayModal]);

    const handleCleanup = function(event) {
        if (window.location.href === event.target.href) {
            setDisplayModal(state => !state)
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
