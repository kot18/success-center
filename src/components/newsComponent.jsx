import React from 'react';
import classes from "../css/news.module.css"
import photoKids from "../images/newsImg/happy-childs.jpg"

const NewsComponent = () => {
    return (
        <section className={classes.sectionContainer}>
            <div className={classes.newsContainer}>
                <div className={classes.imgBlock}>
                    <img className={classes.imgBlockPhoto} src={photoKids} alt="kids-happy"></img>
                </div>
                <div className={classes.dateBlock}>
                    <p>4 декабрь</p>
                </div>
                <div className={classes.headingBlock}>
                    Как правильно кинуть зигу? Наши репортёры спросли профессионала своего дела Адольфа Г...
                </div>
            </div>
        </section>
    );
};

export default NewsComponent;