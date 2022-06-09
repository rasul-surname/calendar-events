export interface EventsState {
    listEvents: any[];
}

export enum EventsActionTypes {
    FETCH_EVENTS = "FETCH_EVENTS",
}

interface FetchEventsAction {
    type: EventsActionTypes.FETCH_EVENTS,
    payload: any[],
}

export type EventsAction = FetchEventsAction;