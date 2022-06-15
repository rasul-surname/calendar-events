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
                <p className={classes.card__title}>{title}</p>
                <Link to={`/events-calendar/events/${(id)}`}>
                    <p className={classes.card__link}>Больше</p>
                </Link>
            </div>
            <img className={classes.card__img} src={image} alt={title}/>
            <div>
                <p className={classes.card__date}>{date}</p>
            </div>
        </div>
    )
}

export default EventsItem;