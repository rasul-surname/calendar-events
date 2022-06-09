import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";

const initialState: EventsState = {
    listEvents: [],
    visibleEvents: [],
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            return {listEvents: action.payload, visibleEvents: action.payload.slice(0, 3)}
        default:
            return state;
    }
}