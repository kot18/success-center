import React from 'react';

import NavigationComponent from "../components/navigationComponent";
import GalleryComponent from "../components/galleryComponent";
import FooterComponent from "../components/footerComponent";

const Gallery = () => {
    return (
        <>
            <title>Галерея</title>
            <NavigationComponent></NavigationComponent>
            <GalleryComponent></GalleryComponent>
            <FooterComponent></FooterComponent>
        </>
    );
};

export default Gallery;