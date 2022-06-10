import React from "react";
import {Button} from "antd";
import {RightOutlined} from "@ant-design/icons/lib";
import classes from './SelectedItem.module.css';

interface InterfaceSelectedItem {
    id: number;
    image: string,
    title: string;
    date: string;
    description: string;
}

const SelectedItem: React.FC<InterfaceSelectedItem> = (props) => {
    const {id, image, title, date, description} = props;

    return (
        <div key={id}>
            <div className={classes.card__row}>
                <img className={classes.card__img} src={image} alt={title}/>
                <div className={classes.card__right}>
                    <div>
                        <div className={classes.card__right__top}>
                            <p className={classes.card__title}>{title}</p>
                            <p className={classes.card__date}>{date}</p>
                        </div>
                        <div className={classes.card__right__center}>
                            <p className={classes.card__desc}>{description}</p>
                        </div>
                    </div>
                    <div className={classes.card__btn}>
                        <Button type="primary" shape="round" icon={<RightOutlined/>} size="large">
                            Записаться
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.visitors}>
                <p>Посетители</p>
                <p>пока никто не записан</p>
            </div>
        </div>

    )
}

export default SelectedItem;