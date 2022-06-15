import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";

import SelectedFilter from "../SelectedFitler/SelectedFilter";
import EventsItem from "./EventsItem/EventsItem";
import classes from './EventsPage.module.css';

const EventsPage = () => {
    const {visibleEvents, allListEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        if (allListEvents.length === 0) dispatch(fetchEvents());
    }, [allListEvents, visibleEvents]);

    return (
        <div className={classes.wrapper}>
            <SelectedFilter/>
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
        </div>
    )
}

export default EventsPage;