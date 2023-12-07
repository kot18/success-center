import React from 'react';
import classes from "../css/about.module.css"
import photo from "../images/people/boss-new.jpg"
import photoKids from "../images/people/kids-new-2.png"

const AboutComponent = () => {
    return (
        <section className={classes.aboutBoss}>
            <h1>О нашем центре</h1>
            <div className={classes.imgContainer}>
                <img className={classes.kidsImg} alt="Boss image" src={photoKids}></img>
            </div>
            <div className={classes.aboutUs}>
                <p className={classes.aboutUsText}>Мы — Центр коррекции и развития детей " Успех" готовы помочь Вашему ребёнку! Наш Центр создан c любовью и заботой для гармоничного развития детей с учетом индивидуальных способностей и особенностей личности.</p>
                <p className={classes.aboutUsText}>Девиз Центра: Развиваем, а не развлекаем!</p>
                <p className={classes.aboutUsText}>В Центре проводятся:</p>
                <ul>
                    <li>индивидуальные и групповые занятия для детей от 1 года;</li>
                    <li>диагностика уровня речевого и общего развития;</li>
                    <li>запуск" речевой деятельности;</li>
                    <li>коррекция звукопроизношения;</li>
                    <li>формирование лексико-грамматического строя речи;</li>
                    <li>развитие связной речи и коммуникации;</li>
                    <li>обучение чтению, подготовка к школе;</li>
                    <li>оказание психологической помощи с учётом возрастных особенностей.</li>
                </ul>
                <p className={classes.aboutUsText}>Добро пожаловать в Центр коррекции и развития детей "Успех"!</p>
            </div>
            <h1>О нашем руководителе</h1>
            <div className={classes.containerBossInfo}>
                <img className={classes.bossImg} alt="Boss image" src={photo}></img>
                <div className={classes.bossText}>
                    <p className={classes.aboutUsText}>Образование:</p>
                    <ul>
                        <li>Московский государственный педагогический университет имени М. Шолохова</li>
                        <li>Дефектологический факультет</li>
                    </ul>
                    <p className={classes.aboutUsText}>Опыт работы:</p>
                    <ul>
                        <li>Реабилитацонный центр для детей с ограниченными возможностями здоровья;</li>
                        <li>Детский сад, коррекционная группа для детей с ЗПР;</li>
                        <li>Центр коррекции и развития детей "Успех".</li>
                    </ul>
                    <p className={classes.aboutUsText}>Педагогический стаж 32 г.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;