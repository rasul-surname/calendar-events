import React from "react";
import {NavLink} from "react-router-dom";

import {AppstoreOutlined} from "@ant-design/icons";
import {CalendarOutlined} from "@ant-design/icons";

import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.wrapper}>
            <NavLink
                to="/events-calendar"
                className={({isActive}) => isActive ? classes.link + ' ' + classes.active : classes.link}
            >
                <AppstoreOutlined/>
                <span>События</span>
            </NavLink>
            <NavLink
                to="/events-calendar/calendar"
                className={({isActive}) => isActive ? classes.link + ' ' + classes.active : classes.link}
            >
                <CalendarOutlined/>
                <span>Календарь</span>
            </NavLink>
        </header>
    )
}

export default Header;