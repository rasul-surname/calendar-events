import React from "react";
import {Link} from "react-router-dom";
import classes from './EventsItem.module.css';

interface InterfaceCalendarItem {
    id: number;
    title: string;
    image: string;
    date: string;
}

const EventsItem: React.FC<InterfaceCalendarItem> = (props) => {
    const {id, title, image, date} = props;

    return (

        <div className={classes.card}>
            <div>
                <p className={classes.card__text__title}>{title}</p>
                <Link to={`/events/${(id)}`}>
                    <p className={classes.card__text__more}>Больше</p>
                </Link>
            </div>
            <img src={image} alt=""/>
            <div>
                <p className={classes.card__text__date}>{date}</p>
            </div>
        </div>
    )
}

export default EventsItem;