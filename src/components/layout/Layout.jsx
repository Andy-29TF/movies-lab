import React from 'react';
// import footer si header
import Header from '../header/Header';
import Footer from '../footer/Footer';
//* import the stylized  component
import { LayoutContainer } from './layout.styles';



function Layout(props) {
    return (
        <LayoutContainer>
            <Header/>
                { props.children }
            <Footer/>
        </LayoutContainer>
    )
}

export default Layout;
