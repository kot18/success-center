import React from 'react';
import classes from "../css/navigation.module.css"
import logo from "../images/appImages/logo-new-2.png";

const NavigationComponent = () => {
    return (
        <section className={classes.AppNavHeaderCpnyainer}>
            <header className={classes.appHeader}>
                <img className={classes.logoHeader} src={logo} alt="logo"></img>
                <div className={classes.headerText}>Центр коррекции и развития детей "УСПЕХ"</div>
            </header>
            <nav className={classes.appNav}>
                <a href="/" className={classes.appNavUnit}>Главная</a>
                <a href="/news" className={classes.appNavUnit}>Новости и статьи</a>
                <a href="/gallery" className={classes.appNavUnit}>Галерея</a>
                <a href="/teachers" className={classes.appNavUnit}>Преподаватели</a>
                <a href="/account" className={classes.appNavUnit}>Личный кабинет</a>
            </nav>
        </section>
    );
};

export default NavigationComponent;