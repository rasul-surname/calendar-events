import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";
import {formatDate} from "../../utils/formatDate";
import {getMonthYear} from "../../utils/getMonthYear";
import {getLogOutEvents} from "../../utils/getLogOutEvents";
import {getLogOutEventsById} from "../../utils/getLogOutEventsById";
import {getSignUpEventsByID} from "../../utils/getSignUpEventsByID";

const initialState: EventsState = {
    listEvents: [],
    visibleEvents: [],
    countAddEvents: 3,
    recorderEvents: [],
    recorderEventsID: [],
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
                visibleEvents: payloadList,
            };
        case EventsActionTypes.ADD_EVENTS:
            return {
                ...state,
                countAddEvents: state.countAddEvents + state.countAddEvents,
            }
        case EventsActionTypes.DELETE_EVENT:
            let filterEvents = state.listEvents.filter((elem) => {
                return elem.id !== action.payload;
            })

            return {
                ...state,
                listEvents: filterEvents,
                visibleEvents: filterEvents,
                recorderEvents: state.recorderEvents.filter((elem) => {
                    return elem.id !== action.payload;
                })
            }
        case EventsActionTypes.SHOW_EVENTS:
            let filterEventsDate = state.listEvents.filter((event) => {
                if (getMonthYear(event.date) === action.payload) {
                    return true;
                }
            });

            return {
                ...state,
                visibleEvents: filterEventsDate
            }
        case EventsActionTypes.SIGN_UP_EVENT:
            return {
                ...state,
                recorderEvents: [...state.recorderEvents, ...getSignUpEventsByID(state.listEvents, action.payload)],
                recorderEventsID: [...state.recorderEventsID, ...getSignUpEventsByID(state.listEvents, action.payload).map(event => event.id)]
            }
        case EventsActionTypes.LOG_OUT_EVENT:
            return {
                ...state,
                recorderEvents: getLogOutEvents(state.recorderEvents, action.payload),
                recorderEventsID: getLogOutEventsById(state.recorderEventsID, action.payload)
            }
        default:
            return state;
    }
}