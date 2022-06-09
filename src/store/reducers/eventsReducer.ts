import {EventsAction, EventsActionTypes, EventsState} from "../../types/events";

const initialState: EventsState = {
    listEvents: [],
}

export const eventsReducer = (state = initialState, action: EventsAction): EventsState => {
    switch (action.type) {
        case EventsActionTypes.FETCH_EVENTS:
            return {listEvents: action.payload}
        default:
            return state;
    }
}