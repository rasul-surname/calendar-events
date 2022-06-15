import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import {addEvents} from "../../store/action-creators/events";

import {DownloadOutlined} from "@ant-design/icons/lib";
import {Button} from "antd";

import SelectedFilter from "../SelectedFitler/SelectedFilter";
import CalendarItem from "./CalendarItem/CalendarItem";
import classes from './CalendarPage.module.css';

const CalendarPage = () => {
    const {allListEvents, recordedEvents, eventsVisibleCalendar} = useTypedSelector(state => state.events);
    const dispatch = useDispatch();

    // Количество видимых событий до нажатия на кнопку
    const eventsShow = recordedEvents.slice(0, eventsVisibleCalendar);

    useEffect(() => {
    }, [allListEvents, recordedEvents, eventsVisibleCalendar]);

    return (
        <div className={classes.wrapper}>
            <SelectedFilter/>
            <div>
                {eventsShow.map((elem) => {
                    return (
                        <CalendarItem
                            key={elem.id}
                            id={elem.id}
                            image={elem.image}
                            title={elem.title}
                            description={elem.description}
                        />
                    )
                })}
                {
                    (recordedEvents.length > 3 && eventsShow.length !== recordedEvents.length)
                    &&
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
                }
            </div>
        </div>
    )

    function downloadEvents() {
        dispatch(addEvents());
    }
}

export default CalendarPage;