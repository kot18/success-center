import React from 'react';
import classes from "../css/navigation.module.css"

const Navigation = () => {
    return (
        <nav className={classes.appNav}>
            <button className={classes.appNavUnit}>Главная</button>
            <button className={classes.appNavUnit}>Новости</button>
            <button className={classes.appNavUnit}>Галерея</button>
            <button className={classes.appNavUnit}>Преподаватели</button>
            <button className={classes.appNavUnit}>Личный кабинет</button>
        </nav>
    );
};

export default Navigation;