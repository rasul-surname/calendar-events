import React from "react";
import classes from './EventItem.module.css';

interface InterfaceEventItem {
    id: number;
    image: string;
    title: string;
    description: string;
}


const EventItem: React.FC<InterfaceEventItem> = ({id, image, title, description}) => {

    function limitStr(str: string, wordCount: number) {
        return str.split(' ').slice(0, wordCount).join(' ') + '...';
    }

    return (
        <div className={classes.card} key={id}>
            <img className={classes.card__img} src={image} alt=""/>
            <div>
                <p className={classes.card__title}>{title}</p>
                <p className={classes.card__desc}>{limitStr(description, 5)}</p>
            </div>
        </div>
    )
}

export default EventItem;