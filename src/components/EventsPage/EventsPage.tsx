import React, {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";

import {Spin} from "antd";
import {WarningOutlined} from "@ant-design/icons/lib";

import SelectedFilter from "../SelectedFitler/SelectedFilter";
import PageInfo from "../PageInfo/PageInfo";
import EventsItem from "./EventsItem/EventsItem";
import classes from './EventsPage.module.css';

const EventsPage = () => {
    const {visibleEvents, allListEvents, loading, error} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        if (allListEvents.length === 0) dispatch(fetchEvents());
    }, [allListEvents, visibleEvents]);

    return (
        <div className={classes.wrapper}>
            <SelectedFilter/>
            {loading ?
                <PageInfo>
                    <Spin size="large"/> загрузка...
                </PageInfo>
                :
                error ?
                    <PageInfo>
                        <WarningOutlined/> 404 - {error}
                    </PageInfo>
                    :
                    <div className={classes.cards}>
                        {visibleEvents.map(event => {
                            return (
                                <EventsItem
                                    key={event.id}
                                    id={event.id}
                                    title={event.title}
                                    image={event.image}
                                    date={event.date}
                                />
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default EventsPage;