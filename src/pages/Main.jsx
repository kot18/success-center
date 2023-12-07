import React from 'react';

import NavigationComponent from "../components/navigationComponent";
import AboutComponent from "../components/aboutComponent";
import FooterComponent from "../components/footerComponent";

const Main = () => {
    return (
        <>
           <NavigationComponent></NavigationComponent>
           <AboutComponent></AboutComponent>
           <FooterComponent></FooterComponent>
        </>
    );
};

export default Main;