import {EventsAction, EventsActionTypes} from "../../types/events";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchEvents = (): any => {
    return async (dispatch: Dispatch<EventsAction>) => {
        const response = await axios.get('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62');
        dispatch({type: EventsActionTypes.FETCH_EVENTS, payload: response.data});
    }
}

export const addEvents = () => ({type: EventsActionTypes.ADD_EVENTS});
export const deleteEvent = (id: number) => ({type: EventsActionTypes.DELETE_EVENT, payload: id});
export const showFilteredEvents = (date: string) => ({type: EventsActionTypes.SHOW_FILTERED_EVENTS, payload: date});
export const showAllEvents = () => ({type: EventsActionTypes.SHOW_ALL_EVENTS});
export const signUpEvent = (id: number, name: string, surname: string) => ({type: EventsActionTypes.SIGN_UP_EVENT, payload: {id, name, surname}});
export const logOutEvent = (id: number) => ({type: EventsActionTypes.LOG_OUT_EVENT, payload: id});