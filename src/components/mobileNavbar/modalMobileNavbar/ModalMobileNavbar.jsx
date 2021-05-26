import React from 'react';
//* import the stylized  component
import {ModalContainer, ModalLink} from './modalMobileNavbar.styles';


function ModalMobileNavbar(props) {

    return (
        <ModalContainer displayModal={props.displayModal}>
            <ModalLink to='/news'>News</ModalLink>
            <ModalLink to='/movies'>Movies</ModalLink>
            <ModalLink to='/my-list'>My List</ModalLink>
            <ModalLink to='/'>Sign In</ModalLink>
        </ModalContainer>
    )
}

export default ModalMobileNavbar;
