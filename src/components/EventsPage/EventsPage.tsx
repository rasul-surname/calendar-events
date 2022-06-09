import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";
import EventsItem from "./EventsItem/EventsItem";
import classes from './EventsPage.module.css';

const EventsPage = () => {
    const {listEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        if (listEvents.length === 0) dispatch(fetchEvents());
    }, []);

    return (
        <div className={classes.cards}>
            {listEvents.map((event) => {
                return (
                    <EventsItem id={event.id} title={event.title} image={event.image} date={event.date} />
                )
            })}
        </div>
    )
}

export default EventsPage;