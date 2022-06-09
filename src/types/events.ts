export interface EventsState {
    listEvents: { id: number, date: string, title: string, description: string, image: string }[];
    visibleEvents: { id: number, date: string, title: string, description: string, image: string }[];
    countAddEvents: number;
}

export enum EventsActionTypes {
    FETCH_EVENTS = "FETCH_EVENTS",
    ADD_EVENTS = "ADD_EVENTS",
}

interface FetchEventsAction {
    type: EventsActionTypes.FETCH_EVENTS,
    payload: any[],
}

interface AddEventsAction {
    type: EventsActionTypes.ADD_EVENTS,
}

export type EventsAction = FetchEventsAction | AddEventsAction;