import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {showAllEvents, showFilteredEvents} from "../../store/action-creators/events";
import {DatePicker, DatePickerProps} from "antd";
import moment from "moment";

import classes from './SelectedFilter.module.css';

const SelectedFilter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showAllEvents());
    }, [])

    const onChange: DatePickerProps['onChange'] = (date) => {
        if (date !== null) {
            const monthYear = moment(date, 'MM.YYYY').locale('ru').format('MM.YYYY');
            dispatch(showFilteredEvents(monthYear));
        } else {
            dispatch(showAllEvents());
        }
    };

    return (
        <div className={classes.wrapper}>
            <DatePicker onChange={onChange} picker="month" placeholder="Выберите дату"/>
        </div>
    )
}

export default SelectedFilter;