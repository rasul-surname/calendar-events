import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents, logOutEvent, signUpEvent} from "../../store/action-creators/events";
import SelectedItem from "./SelectedItem/SelectedItem";
import classes from './SelectedPage.module.css';

const SelectedPage = () => {
    const {allListEvents, visibleEvents, recordedEventsID} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();
    const {id} = useParams<{ id: any }>();
    const currentEvent = visibleEvents.find(elem => elem.id == id);

    useEffect(() => {
        if (allListEvents.length === 0) dispatch(fetchEvents());
    }, [allListEvents, visibleEvents, recordedEventsID])

    return (
        <div className={classes.cards}>
            {currentEvent !== undefined ?
                <SelectedItem
                    id={currentEvent.id}
                    image={currentEvent.image}
                    title={currentEvent.title}
                    date={currentEvent.date}
                    description={currentEvent.description}
                    name={currentEvent.name}
                    surname={currentEvent.surname}
                    subscribeEvent={subscribeEvent}
                    unSubscribeEvent={unSubscribeEvent}
                    recorderEventsID={recordedEventsID}
                />
                :
                'Такой страницы не существует'
            }
        </div>
    )

    function subscribeEvent(id: number, firstName: string, lastName: string) {
        dispatch(signUpEvent(id, firstName, lastName));
    }

    function unSubscribeEvent(id: number) {
        dispatch(logOutEvent(id));
    }
}

export default SelectedPage;