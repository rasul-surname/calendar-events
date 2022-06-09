import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents} from "../../store/action-creators/events";
import EventItem from "./EventItem/EventItem";

const EventsPage = () => {
    const {visibleEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(visibleEvents)
        // @ts-ignore
        if (visibleEvents.length === 0) dispatch(fetchEvents());
    }, [])

    return (
        <>
            {visibleEvents.map((elem) => {
                return (
                    <EventItem id={elem.id} image={elem.image} title={elem.title} description={elem.description}/>
                )
            })}
        </>
    )
}

export default EventsPage;