import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";

const initialState: EventsState = {
    listEvents: [],
    visibleEvents: [],
    countAddEvents: 3,
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            return {
                ...state,
                listEvents: action.payload,
                visibleEvents: action.payload.slice(0, state.countAddEvents)
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
        default:
            return state;
    }
}