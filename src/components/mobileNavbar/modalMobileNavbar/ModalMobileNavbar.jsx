import React from 'react';
// import Toggle Theme Button
import ToggleThemeBtn from '../../toggleThemeBtn/ToggleThemeBtn'
//* import the stylized  component
import {ModalContainer, ModalLink} from './modalMobileNavbar.styles';


function ModalMobileNavbar(props) {

    return (
        <ModalContainer displayModal={props.displayModal}>
            <div id="container-for-links">
                <ModalLink to='/news-list' onClick={(event) => props.handleCleanup(event)}>News</ModalLink>
                <ModalLink to='/movies/unfiltered' onClick={(event) => props.handleCleanup(event)}>Movies</ModalLink>
                <ModalLink to='/my-list' onClick={(event) => props.handleCleanup(event)}>My List</ModalLink>
            </div>
            <ToggleThemeBtn/>
        </ModalContainer>
    )
}

export default ModalMobileNavbar;
