import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import classes from "../css/footer.module.css"

const FooterComponent = () => {
    return (
        <section className={classes.footerApp}>
            <div className={classes.footerSection}>
                <h1>Мы находимся тут:</h1>
                <YMaps>
                    <div>
                        <Map defaultState={{ center: [56.645356, 43.475909], zoom: 19 }} />
                    </div>
                </YMaps>
            </div>
            <div className={classes.footerSection}>
                <h1>Наши контакты:</h1>
                <p>Адрес: Нижегородская обл, г. Городец, ул. Кирова 44</p>
                <p>Телефон для связи: +7 800 555 35-35</p>
                <p>Почта для связи: success-center@yandex.ru</p>
                <div className={classes.socialGrupp}>
                    Наши социальные сети:
                    <a className={classes.socialGruppGrupp} target="_blank" href="https://vk.com/public170382941">ВКонтакте</a>
                </div>
            </div>
        </section>
    );
};

export default FooterComponent;