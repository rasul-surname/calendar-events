import React from "react";
import classes from './EventItem.module.css';

interface InterfaceEventItem {
    id: number;
    image: string;
    title: string;
    description: string;
}


const EventItem: React.FC<InterfaceEventItem> = ({id, image, title, description}) => {

    return (
        <div className={classes.card} key={id}>
            <img className={classes.card__img} src={image} alt=""/>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default EventItem;