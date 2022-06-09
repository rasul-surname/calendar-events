import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";
import EventItem from "./EventItem/EventItem";

const EventsPage = () => {
    const {listEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        if (!listEvents) dispatch(fetchEvents());
    }, [])

    return (
        <>
            {listEvents.map((elem) => {
                return (
                    <EventItem id={elem.id} image={elem.image} title={elem.title} description={elem.description}/>
                )
            })}
        </>
    )
}

export default EventsPage;