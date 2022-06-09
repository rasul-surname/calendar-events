import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {fetchEvents, addEvents} from "../../store/action-creators/events";

import {DownloadOutlined} from "@ant-design/icons/lib";
import {Button} from "antd";

import EventItem from "./EventItem/EventItem";
import classes from './EventsPage.module.css';

const EventsPage = () => {
    const {visibleEvents} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        if (visibleEvents.length === 0) dispatch(fetchEvents());
    }, []);

    function downloadEvents() {
        dispatch(addEvents())
    }

    return (
        <>
            {visibleEvents.map((elem) => {
                return (
                    <EventItem id={elem.id} image={elem.image} title={elem.title} description={elem.description}/>
                )
            })}
            <Button className={classes.btn} onClick={downloadEvents} type="primary" shape="round"
                    icon={<DownloadOutlined/>} size="large">
                Загрузить больше
            </Button>
        </>
    )
}

export default EventsPage;