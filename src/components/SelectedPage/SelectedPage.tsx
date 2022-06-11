import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents, logOutEvent, signUpEvent} from "../../store/action-creators/events";
import SelectedItem from "./SelectedItem/SelectedItem";
import classes from './SelectedPage.module.css';

const SelectedPage = () => {
    const {listEvents, visibleEvents, recorderEventsID} = useTypedSelector(state => state.events);
    const {id} = useParams<{ id: any }>();
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        if (listEvents.length === 0) dispatch(fetchEvents());
    }, [listEvents, visibleEvents, recorderEventsID])

    return (
        <div className={classes.cards}>
            {visibleEvents.slice(id, Number(id) + 1).map((event: any) => {
                return (
                    <SelectedItem
                        id={id}
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                        subscribeEvent={subscribeEvent}
                        unSubscribeEvent={unSubscribeEvent}
                        recorderEventsID={recorderEventsID}
                    />
                )
            })}
        </div>
    )

    function subscribeEvent(id: number) {
        dispatch(signUpEvent(id));
    }

    function unSubscribeEvent(id: number) {
        dispatch(logOutEvent(id));
    }
}

export default SelectedPage;