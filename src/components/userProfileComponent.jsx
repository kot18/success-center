import React from 'react';
import classes from "../css/news.module.css"

const NewsComponent = () => {
    return (
        <section className={classes.sectionContainer}>
            <div className={classes.imgContainer}>
                <img></img>
            </div>
            <div className={classes.userInfoContainer}>
                <div className={classes.loginContainer}>
                    <p>Почта: {'user-login@yandex.ru'}</p>
                    <button>Сменить почту</button>
                </div>
                <div className={classes.passwordContainer}>
                    <p>Пароль: {'********'}</p>
                    <button>Изменить пароль</button>
                </div>
            </div>
            <div className={classes.lastCommentsContainer}>

            </div>
        </section>
    );
};

export default NewsComponent;