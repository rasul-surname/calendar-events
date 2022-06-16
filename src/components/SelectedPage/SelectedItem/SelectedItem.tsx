import React, {useState} from "react";
import {limitStr} from "../../../utils/limitStr";

import {Button} from "antd";
import {RightOutlined} from "@ant-design/icons/lib";

import useInput from "../../../store/hooks/useInput";
import ConfirmWindow from "../../ConfirmWindow/ConfirmWindow";
import ModalWindow from "../../ModalWindow/ModalWindow";
import classes from './SelectedItem.module.css';

interface InterfaceSelectedItem {
    id: number;
    image: string,
    title: string;
    date: string;
    description: string;
    name: string;
    surname: string;
    subscribeEvent: (id: number, firstName: string, lastName: string) => any;
    unSubscribeEvent: (id: number) => any;
    recorderEventsID: number[];
}

const SelectedItem: React.FC<InterfaceSelectedItem> = (props) => {
    const {id, image, title, date, description, name, surname, subscribeEvent, unSubscribeEvent, recorderEventsID} = props;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const firstName = useInput("");
    const lastName = useInput("");
    const [inputError, setInputError] = useState("");

    return (
        <>
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
                        {recorderEventsID.includes(+id)
                            ?
                            <Button onClick={() => showModal()} type="primary" shape="round"
                                    size="large" danger>
                                Отписаться
                            </Button>
                            :
                            <Button onClick={() => showModal()} type="primary" shape="round" icon={<RightOutlined/>}
                                    size="large">
                                Записаться
                            </Button>
                        }
                    </div>
                </div>
            </div>
            <div className={classes.visitors}>
                <p>Посетители</p>
                {name ? (name + ' ' + surname) : <p>пока никто не записан</p>}
            </div>
            {recorderEventsID.includes(+id)
                ?
                <ConfirmWindow
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    children="Вы уверены, что хотите отписаться?"
                />
                :
                <ModalWindow
                    title="Записаться на событие"
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                >
                    <>
                        <div className={classes.modal}>
                            <img className={classes.modal__img} src={image} alt={title}/>
                            <div>
                                <p className={classes.modal__title}>{title}</p>
                                <p className={classes.modal__desc}>{limitStr(description, 5)}</p>
                            </div>
                        </div>
                        <form className={classes.modal__form}>
                            {inputError && <div style={{color: 'red', opacity: '0.8'}}>{inputError}</div>}
                            <input {...firstName} type="text" name="firstName" placeholder="Имя"/>
                            <input {...lastName} type="text" name="lastName" placeholder="Фамилия"/>
                        </form>
                    </>
                </ModalWindow>
            }
        </>
    )

    function showModal() {
        setIsModalVisible(true);
    }

    function handleOk() {
        // если подписанны => делаем отписку и закрываем окно
        if (recorderEventsID.includes(+id) == true) {
            unSubscribeEvent(+id);
            setIsModalVisible(false);

            // если не подписанны => проверяем на валидность
        } else if (recorderEventsID.includes(+id) == false && (firstName.value.length < 2 || lastName.value.length < 2)) {
            setInputError("Поля должны содержать минимум по 2 символа");

            // если не подписанны и прошли проверку => делаем подписку и закрываем окно
        } else {
            subscribeEvent(+id, firstName.value, lastName.value);
            setIsModalVisible(false);
            firstName.onChangeValue("");
            lastName.onChangeValue("");
        }
    }

    function handleCancel() {
        setIsModalVisible(false);
    }
}

export default SelectedItem;