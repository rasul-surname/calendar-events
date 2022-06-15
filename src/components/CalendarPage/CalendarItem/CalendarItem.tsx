import React from "react";
import {Link} from "react-router-dom";
import {DeleteOutlined} from "@ant-design/icons/lib";
import classes from './CalendarItem.module.css';

interface InterfaceEventItem {
    id: number;
    image: string;
    title: string;
    description: string;
    removeEvent: (event: any) => any;
}

const CalendarItem: React.FC<InterfaceEventItem> = (props) => {
    const {id, image, title, description, removeEvent} = props;

    function limitStr(str: string, wordCount: number) {
        return str.split(' ').slice(0, wordCount).join(' ') + '...';
    }

    return (
        <div className={classes.card}>
            <div>
                <img className={classes.card__img} src={image} alt=""/>
                <div>
                    <p className={classes.card__title}>{title}</p>
                    <p className={classes.card__desc}>{limitStr(description, 5)}</p>
                </div>
            </div>
            <div>
                <div className={classes.card__text__action}>
                    <p onClick={removeEvent}>Удалить</p>
                    <DeleteOutlined className={classes.card__delete__icon} onClick={removeEvent}/>
                </div>
                <div className={classes.card__text__action}>
                    <Link to={`/events-calendar/events/${(id)}`}>
                        <p>Перейти на страницу</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CalendarItem;