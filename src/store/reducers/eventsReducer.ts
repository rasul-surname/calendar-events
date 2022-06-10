import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";
import {formatDate} from "../../utils/formatDate";
import {getMonthYear} from "../../utils/getMonthYear";

const initialState: EventsState = {
    listEvents: [],
    visibleEvents: [],
    countAddEvents: 3,
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            let payloadList = action.payload.map((event) => {
                event.date = formatDate(event.date);
                return event;
            });

            return {
                ...state,
                listEvents: payloadList,
                visibleEvents: payloadList.slice(0, state.countAddEvents)
            };
        case EventsActionTypes.ADD_EVENTS:
            return {
                ...state,
                visibleEvents: state.listEvents.slice(0, state.visibleEvents.length + state.countAddEvents)
            }
        case EventsActionTypes.DELETE_EVENT:
            return {
                ...state,
                listEvents: state.listEvents.filter((elem) => {
                    return elem.id !== action.payload;
                }),
                visibleEvents: state.visibleEvents.filter((elem) => {
                    return elem.id !== action.payload;
                })
            }
        case EventsActionTypes.SHOW_EVENTS:
            let filterEvents = state.listEvents.filter((event) => {
                if(getMonthYear(event.date) === action.payload) {
                    return true;
                }
            });

            return {
                ...state,
                visibleEvents: filterEvents
            }
        default:
            return state;
    }
}