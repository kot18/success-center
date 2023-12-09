import React from 'react';
import classes from "../css/userProfile.module.css"
import avatar from "../images/people/avatar_scaled.jpeg"

const UserComponent = () => {
    return (
        <section className={classes.sectionContainer}>
            <div className={classes.imgContainer}>
                {/*<button className={classes.userInfoItemButton}>Изменить фото</button>*/}
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={classes.photoProfile} src={avatar} alt="user photo"></img>
            </div>
            <div className={classes.userInfoContainer}>
                <div className={classes.userInfoItem}>
                    <p>Дата рождения: {"03.02.2003"}</p>
                    <button className={classes.userInfoItemButton}>Изменить</button>
                </div>
                <div className={classes.userInfoItem}>
                    <p>Гендер: {"Мужской"}</p>
                </div>
                <div className={classes.userInfoItem}>
                    <p>Почта: {'user-login@yandex.ru'}</p>
                    <button className={classes.userInfoItemButton}>Сменить почту</button>
                </div>
                <div className={classes.userInfoItem}>
                    <p>Пароль: {'********'}</p>
                    <button className={classes.userInfoItemButton}>Изменить пароль</button>
                </div>
            </div>
            <div className={classes.lastCommentsContainer}>

            </div>
        </section>
    );
};

export default UserComponent;