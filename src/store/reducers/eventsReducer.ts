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
        default:
            return state;
    }
}