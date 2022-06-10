import React from "react";
import {useDispatch} from "react-redux";

import {showEvents} from "../../store/action-creators/events";
import {DatePicker, DatePickerProps} from "antd";
import moment from "moment";

import classes from './SelectedFilter.module.css';

const SelectedFilter = () => {
    const dispatch = useDispatch();

    const onChange: DatePickerProps['onChange'] = (date) => {
        const monthYear = moment(date, 'MM.YYYY').locale('ru').format('MM.YYYY');
        dispatch(showEvents(monthYear));
    };

    return (
        <div className={classes.wrapper}>
            <DatePicker onChange={onChange} picker="month" placeholder="Выберите дату"/>
        </div>
    )
}

export default SelectedFilter;