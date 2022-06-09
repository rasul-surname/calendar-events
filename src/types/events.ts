export interface EventsState {
    listEvents: {id: number, date: string, title: string, description: string, image: string}[];
    visibleEvents: {id: number, date: string, title: string, description: string, image: string}[];
}

export enum EventsActionTypes {
    FETCH_EVENTS = "FETCH_EVENTS",
}

interface FetchEventsAction {
    type: EventsActionTypes.FETCH_EVENTS,
    payload: any[],
}

export type EventsAction = FetchEventsAction;