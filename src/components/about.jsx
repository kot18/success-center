import React from 'react';
import classes from "../css/about.module.css"
import photo from "../images/people/people-boss-shablon.jpg"

const About = () => {
    return (
        <section className={classes.aboutBoss}>
            <h1>О нашем руководителе</h1>
            <div className={classes.containerBossInfo}>
                <img className={classes.bossImg} alt="Boss image" src={photo}></img>
                <div className={classes.bossText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque distinctio fuga illo illum in ipsa ipsum laboriosam molestias natus nostrum odio placeat, quasi quisquam rerum saepe sequi vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem delectus doloribus error et, molestias nam neque nihil quidem quod, rem temporibus vel voluptas? Aliquam cum delectus iusto reprehenderit ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minima modi sapiente sint tenetur unde voluptatum! Adipisci eveniet fugiat illum minus nostrum officia omnis quo sint tempora totam, velit voluptates!</div>
            </div>
            <h1>О нашем центре</h1>
            <div className={classes.aboutUs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque distinctio fuga illo illum in ipsa ipsum laboriosam molestias natus nostrum odio placeat, quasi quisquam rerum saepe sequi vitae voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem delectus doloribus error et, molestias nam neque nihil quidem quod, rem temporibus vel voluptas? Aliquam cum delectus iusto reprehenderit ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minima modi sapiente sint tenetur unde voluptatum! Adipisci eveniet fugiat illum minus nostrum officia omnis quo sint tempora totam, velit voluptates!</div>
        </section>
    );
};

export default About;