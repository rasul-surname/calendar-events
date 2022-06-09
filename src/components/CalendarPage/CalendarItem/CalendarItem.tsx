import React from "react";
import {DeleteOutlined} from "@ant-design/icons/lib";
import classes from './CalendarItem.module.css';

interface InterfaceEventItem {
    id: number;
    image: string;
    title: string;
    description: string;
    removeEvent: () => any;
}

const CalendarItem: React.FC<InterfaceEventItem> = (props) => {
    const {id, image, title, description, removeEvent} = props;

    function limitStr(str: string, wordCount: number) {
        return str.split(' ').slice(0, wordCount).join(' ') + '...';
    }

    return (
        <div className={classes.card} key={id}>
            <div>
                <img className={classes.card__img} src={image} alt=""/>
                <div>
                    <p className={classes.card__title}>{title}</p>
                    <p className={classes.card__desc}>{limitStr(description, 5)}</p>
                </div>
            </div>
            <div>
                <DeleteOutlined  className={classes.card__delete__icon} />
                <p className={classes.card__delete__text} onClick={removeEvent}>Удалить</p>
            </div>
        </div>
    )
}

export default CalendarItem;