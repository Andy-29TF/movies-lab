import React from 'react';
//* import the stylized  component
import {ModalContainer, ModalLink} from './modalMobileNavbar.styles';


function ModalMobileNavbar(props) {

    return (
        <ModalContainer displayModal={props.displayModal}>
            <ModalLink to='/news' onClick={(event) => props.handleCleanup(event)}>News</ModalLink>
            <ModalLink to='/movies/unfiltered' onClick={(event) => props.handleCleanup(event)}>Movies</ModalLink>
            <ModalLink to='/my-list' onClick={(event) => props.handleCleanup(event)}>My List</ModalLink>
            <ModalLink to='/' onClick={(event) => props.handleCleanup(event)}>Sign In</ModalLink>
        </ModalContainer>
    )
}

export default ModalMobileNavbar;
