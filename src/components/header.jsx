import React from 'react';
import classes from "../css/header.module.css"
//import "/success-center/src/css/index.css"
import logo from "../images/appImages/logo-new-2.png"

const Header = () => {
    return (
        <header className={classes.appHeader}>
            <img className={classes.logoHeader} src={logo} alt="logo"></img>
            <div className={classes.headerText}>Центр коррекции и развития детей "УСПЕХ"</div>
        </header>
    );
};

export default Header;