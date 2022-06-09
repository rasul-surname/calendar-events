import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";
import CalendarItem from "./CalendarItem/CalendarItem";
import classes from './CalendarPage.module.css';

const CalendarPage = () => {
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
                    <CalendarItem id={event.id} title={event.title} image={event.image} date={event.date} />
                )
            })}
        </div>
    )
}

export default CalendarPage;