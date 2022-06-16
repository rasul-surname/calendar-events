import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";

import {getLogOutEventsById} from "../../utils/events/getLogOutEventsById";
import {getFilterEventsByDate} from "../../utils/events/filteredEventsDate";
import {convertPayload} from "../../utils/events/convertPayload";
import {getEventsWithoutId} from "../../utils/events/getEventsWithoutId";
import {getEventsById} from "../../utils/events/getEventsById";
import {replaceEventsById} from "../../utils/events/replaceEventsById";

const initialState: EventsState = {
    allListEvents: [],
    visibleEvents: [],
    eventsVisibleCalendar: 3,
    allRecordedEvents: [],
    recordedEvents: [],
    recordedEventsID: [],
    loading: false,
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    let replaceEvents;

    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            const convertedPayload = convertPayload(action.payload);

            return {
                ...state,
                allListEvents: convertedPayload,
                visibleEvents: convertedPayload,
                loading: false
            };

        case EventsActionTypes.ADD_EVENTS:
            return {
                ...state,
                eventsVisibleCalendar: state.eventsVisibleCalendar + state.eventsVisibleCalendar,
            }

        case EventsActionTypes.DELETE_EVENT:
            replaceEvents = replaceEventsById(state.allListEvents, action.payload, "", "");

            return {
                ...state,
                allListEvents: [...replaceEvents],
                visibleEvents: [...replaceEvents],
                recordedEvents: getEventsWithoutId(state.recordedEvents, action.payload),
                recordedEventsID: state.recordedEventsID.filter(idEvent => idEvent !== action.payload),
                allRecordedEvents: getEventsWithoutId(state.recordedEvents, action.payload),
            }

        case EventsActionTypes.SHOW_FILTERED_EVENTS:
            return {
                ...state,
                visibleEvents: getFilterEventsByDate(state.allListEvents, action.payload),
                recordedEvents: getFilterEventsByDate(state.recordedEvents, action.payload)
            }

        case EventsActionTypes.SHOW_ALL_EVENTS:
            return {
                ...state,
                visibleEvents: state.allListEvents,
                recordedEvents: state.allRecordedEvents,
            }

        case EventsActionTypes.SIGN_UP_EVENT:
            const filterListEventsById = getEventsById(state.allListEvents, action.payload.id);
            replaceEvents = replaceEventsById(state.allListEvents, action.payload.id, action.payload.name, action.payload.surname);

            return {
                ...state,
                allListEvents: [...replaceEvents],
                visibleEvents: [...replaceEvents],
                recordedEvents: [...state.recordedEvents, ...filterListEventsById],
                recordedEventsID: [...state.recordedEventsID, ...filterListEventsById.map(event => event.id)],
                allRecordedEvents: [...state.recordedEvents, ...filterListEventsById]
            }

        case EventsActionTypes.LOG_OUT_EVENT:
            const filterRecorderEvents = getEventsWithoutId(state.recordedEvents, action.payload);
            replaceEvents = replaceEventsById(state.allListEvents, action.payload, "", "");

            return {
                ...state,
                allListEvents: [...replaceEvents],
                visibleEvents: [...replaceEvents],
                recordedEvents: filterRecorderEvents,
                recordedEventsID: getLogOutEventsById(state.recordedEventsID, action.payload),
                allRecordedEvents: filterRecorderEvents
            }

        case EventsActionTypes.GET_EVENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}