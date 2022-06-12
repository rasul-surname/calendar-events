import React, {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {addEvents, deleteEvent} from "../../store/action-creators/events";

import {DownloadOutlined} from "@ant-design/icons/lib";
import {Button} from "antd";

import SelectedFilter from "../SelectedFitler/SelectedFilter";
import CalendarItem from "./CalendarItem/CalendarItem";
import classes from './CalendarPage.module.css';

const CalendarPage = () => {
    const { listEvents ,recorderEvents, countAddEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [listEvents, recorderEvents, countAddEvents]);

    return (
        <div className={classes.wrapper}>
            <SelectedFilter />
            <div>
                {recorderEvents.slice(0, countAddEvents).map((elem) => {
                    return (
                        <CalendarItem
                            key={elem.id}
                            id={elem.id}
                            image={elem.image}
                            title={elem.title}
                            description={elem.description}
                            removeEvent={(event: any) => removeEvent(elem.id, event)}
                        />
                    )
                })}
                {recorderEvents.length > 3 && recorderEvents.slice(0, countAddEvents).length !== recorderEvents.length
                    ?
                    <Button
                        className={classes.cards__btn}
                        onClick={downloadEvents}
                        type="primary"
                        shape="round"
                        icon={<DownloadOutlined/>}
                        size="large"
                    >
                        Загрузить больше
                    </Button>
                    :
                    ''
                }
            </div>
        </div>
    )

    function removeEvent(id: number, event: any) {
        event.preventDefault();
        dispatch(deleteEvent(id));
    }

    function downloadEvents() {
        dispatch(addEvents());
    }
}

export default CalendarPage;