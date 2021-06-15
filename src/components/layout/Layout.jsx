import React from 'react';
// import footer, header and message slot
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SearchBar from '../searchBar/SearchBar';
// import MessageSlot from '../messageSlot/MessageSlot';
//* import the stylized  component
import { LayoutContainer } from './layout.styles';



function Layout(props) {
    return (
        <LayoutContainer>
            <Header/>
            <SearchBar/>
                { props.children }
            <Footer/>
            {/* <MessageSlot/> */}
        </LayoutContainer>
    )
}

export default Layout;
