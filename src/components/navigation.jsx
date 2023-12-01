import React from 'react';
import classes from "../css/navigation.module.css"
import logo from "../images/appImages/logo-new-2.png";

import News from "./../components/news";
import {Route, Routes} from "react-router-dom";

const Navigation = () => {
    return (
        <section className={classes.AppNavHeaderCpnyainer}>
            <header className={classes.appHeader}>
                <img className={classes.logoHeader} src={logo} alt="logo"></img>
                <div className={classes.headerText}>Центр коррекции и развития детей "УСПЕХ"</div>
            </header>
            <nav className={classes.appNav}>
                <a href="/" className={classes.appNavUnit}>Главная</a>
                <a href="/news" className={classes.appNavUnit}>Новости</a>
                <a href="/gallery" className={classes.appNavUnit}>Галерея</a>
                <a href="/teachers" className={classes.appNavUnit}>Преподаватели</a>
                <a href="/account" className={classes.appNavUnit}>Личный кабинет</a>
            </nav>
            <Routes>
                <Route path="/news" element={<News/>}></Route>
            </Routes>
        </section>
    );
};

export default Navigation;