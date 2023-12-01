import React from 'react';
import classes from "../css/bottom.module.css"

const Bottom = () => {
    return (
        <bottom className={classes.bottomApp}>
            <div className={classes.bottomSection}>
                Мы находимся по адресу: улица Кирова, 44, Городец, Нижегородская область
            </div>
            <div className={classes.bottomSection}>
                Телефон для связи: 8 800 555 35 35
                Почта: succes-center@yandex.ru
            </div>
            <div className={classes.bottomSection}>
                Copyright @kot
            </div>
        </bottom>
    );
};

export default Bottom;