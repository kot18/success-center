import React from 'react';
import FooterComponent from "../components/footerComponent";
import UserComponent from "../components/userProfileComponent";
import NavigationComponent from "../components/navigationComponent";

const NewsAndArticles = () => {
    return (
        <>
            <NavigationComponent></NavigationComponent>
            <UserComponent></UserComponent>
            <FooterComponent></FooterComponent>
        </>
    );
};

export default NewsAndArticles;