export interface EventsState {
    listEvents: { id: number, date: string, title: string, description: string, image: string }[];
    visibleEvents: { id: number, date: string, title: string, description: string, image: string }[];
    countAddEvents: number;
    recorderEvents: { id: number, date: string, title: string, description: string, image: string }[];
    recorderEventsID: number[];
}

export enum EventsActionTypes {
    FETCH_EVENTS = "FETCH_EVENTS",
    ADD_EVENTS = "ADD_EVENTS",
    DELETE_EVENT = "DELETE_EVENT",
    SHOW_EVENTS = "SHOW_EVENTS",
    SIGN_UP_EVENT = "SIGN_UP_EVENT",
    LOG_OUT_EVENT = "LOG_OUT_EVENT",
}

interface FetchEventsAction {
    type: EventsActionTypes.FETCH_EVENTS,
    payload: any[],
}

interface AddEventsAction {
    type: EventsActionTypes.ADD_EVENTS,
}

interface DeleteEventsAction {
    type: EventsActionTypes.DELETE_EVENT,
    payload: number,
}

interface ShowEventsAction {
    type: EventsActionTypes.SHOW_EVENTS,
    payload: string,
}

interface SignUpEventsAction {
    type: EventsActionTypes.SIGN_UP_EVENT,
    payload: number,
}

interface LogOutEventsAction {
    type: EventsActionTypes.LOG_OUT_EVENT,
    payload: number,
}

export type EventsAction =
    FetchEventsAction
    | AddEventsAction
    | DeleteEventsAction
    | ShowEventsAction
    | SignUpEventsAction
    | LogOutEventsAction;