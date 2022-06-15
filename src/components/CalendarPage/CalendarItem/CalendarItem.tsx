import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {deleteEvent} from "../../../store/action-creators/events";
import {limitStr} from "../../../utils/limitStr";

import {DeleteOutlined, ExclamationCircleOutlined} from "@ant-design/icons/lib";

import ModalWindow from "../../ModalWindow/ModalWindow";
import classes from './CalendarItem.module.css';

interface InterfaceEventItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const CalendarItem: React.FC<InterfaceEventItem> = (props) => {
    const {id, image, title, description} = props;
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

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
                <div className={classes.card__action}>
                    <p onClick={showModal}>Удалить</p>
                    <DeleteOutlined className={classes.card__delete} onClick={showModal}/>
                </div>
                <div className={classes.card__action}>
                    <Link to={`/events-calendar/events/${(id)}`}>
                        <p>Перейти на страницу</p>
                    </Link>
                </div>
            </div>
            <ModalWindow title={false} isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}>
                <p style={{fontWeight: 700}}>
                    <span style={{
                        color: '#FAAD14',
                        marginRight: '16px',
                        fontSize: '18px'
                    }}>
                        <ExclamationCircleOutlined/>
                    </span>
                    Вы уверены, что хотите отказаться?
                </p>
            </ModalWindow>
        </div>
    )

    function showModal() {
        setIsModalVisible(true);
    }

    function handleOk() {
        setIsModalVisible(false);
        dispatch(deleteEvent(id));
    }

    function handleCancel() {
        setIsModalVisible(false);
    }
}

export default CalendarItem;