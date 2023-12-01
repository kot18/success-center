import React from 'react';
import classes from "../css/bottom.module.css"

const Bottom = () => {
    return (
        <section className={classes.bottomApp}>
            <div className={classes.bottomSection}>
                <p>Мы находимся по адресу: улица Кирова, 44, Городец, Нижегородская область</p>
            </div>
            <div className={classes.bottomSection}>
                <p>Телефон для связи: 8 800 555 35 35</p>
                <p>Почта: succes-center@yandex.ru</p>
            </div>
            <div className={classes.bottomSection}>
                <p>Copyright @kot</p>
            </div>
        </section>
    );
};

export default Bottom;