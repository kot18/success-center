import React from 'react';

import NavigationComponent from "../components/navigationComponent";
import NewsComponent from "../components/newsComponent";
import FooterComponent from "../components/footerComponent";

const NewsAndArticles = () => {
    return (
        <>
          <title>Новости и статьи</title>
          <NavigationComponent></NavigationComponent>
          <NewsComponent></NewsComponent>
          <FooterComponent></FooterComponent>
        </>
    );
};

export default NewsAndArticles;