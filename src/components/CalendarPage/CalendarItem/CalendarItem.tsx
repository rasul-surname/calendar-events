import React from "react";
import classes from './CalendarItem.module.css';

interface InterfaceCalendarItem {
    id: number;
    title: string;
    image: string;
    date: string;
}

const CalendarItem: React.FC<InterfaceCalendarItem> = (props) => {
    const {id, title, image, date} = props;

    return (
        <div className={classes.card} key={id}>
            <div>
                <p className={classes.card__text__title}>{title}</p>
                <p className={classes.card__text__more}>Больше</p>
            </div>
            <img src={image} alt=""/>
            <div>
                <p className={classes.card__text__date}>{date}</p>
            </div>
        </div>
    )
}

export default CalendarItem;