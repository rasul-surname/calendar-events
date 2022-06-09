import {EventsAction, EventsActionTypes} from "../../types/events";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchEvents = () => {
    return async (dispatch: Dispatch<EventsAction>) => {
        const response = await axios.get('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62');
        dispatch({type: EventsActionTypes.FETCH_EVENTS, payload: response.data});
    }
}

export const addEvents = () => ({type: EventsActionTypes.ADD_EVENTS});