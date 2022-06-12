import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";

import {getLogOutEventsById} from "../../utils/events/getLogOutEventsById";
import {getFilterEventsByDate} from "../../utils/events/filteredEventsDate";
import {convertPayload} from "../../utils/events/convertPayload";
import {getEventsWithoutId} from "../../utils/events/getEventsWithoutId";
import {getEventsById} from "../../utils/events/getEventsById";

const initialState: EventsState = {
    listEvents: [],
    visibleEvents: [],
    countAddEvents: 3,
    recorderEvents: [],
    recorderEventsID: [],
    listRecorderEvents: [],
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            const payloadList = convertPayload(action.payload);

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
            const filterListEventsWithoutId = getEventsWithoutId(state.listEvents, action.payload);

            return {
                ...state,
                listEvents: filterListEventsWithoutId,
                visibleEvents: filterListEventsWithoutId,
                recorderEvents: getEventsWithoutId(state.recorderEvents, action.payload),
                recorderEventsID: state.recorderEventsID.filter((elem) => {
                    return elem !== action.payload;
                }),
                listRecorderEvents: getEventsWithoutId(state.recorderEvents, action.payload),
            }

        case EventsActionTypes.SHOW_FILTERED_EVENTS:
            return {
                ...state,
                visibleEvents: getFilterEventsByDate(state.listEvents, action.payload),
                recorderEvents: getFilterEventsByDate(state.recorderEvents, action.payload)
            }

        case EventsActionTypes.SHOW_ALL_EVENTS:
            return {
                ...state,
                visibleEvents: state.listEvents,
                recorderEvents: state.listRecorderEvents,
            }

        case EventsActionTypes.SIGN_UP_EVENT:
            const filterListEventsById = getEventsById(state.listEvents, action.payload);

            return {
                ...state,
                recorderEvents: [...state.recorderEvents, ...filterListEventsById],
                recorderEventsID: [...state.recorderEventsID, ...filterListEventsById.map(event => event.id)],
                listRecorderEvents: [...state.recorderEvents, ...filterListEventsById]
            }

        case EventsActionTypes.LOG_OUT_EVENT:
            const filterRecorderEvents = getEventsWithoutId(state.recorderEvents, action.payload);

            return {
                ...state,
                recorderEvents: filterRecorderEvents,
                recorderEventsID: getLogOutEventsById(state.recorderEventsID, action.payload),
                listRecorderEvents: filterRecorderEvents
            }

        default:
            return state;
    }
}