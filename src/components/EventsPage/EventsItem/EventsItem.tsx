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
        <Link to={`/events/${(id)}`}>
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
        </Link>
    )
}

export default EventsItem;