export interface EventsState {
    listEvents: { id: number, date: string, title: string, description: string, image: string }[];
    visibleEvents: { id: number, date: string, title: string, description: string, image: string }[];
    countAddEvents: number;
    recorderEvents: { id: number, date: string, title: string, description: string, image: string }[];
    recorderEventsID: number[];
    listRecorderEvents: { id: number, date: string, title: string, description: string, image: string }[];
}

export enum EventsActionTypes {
    FETCH_EVENTS = "FETCH_EVENTS",
    ADD_EVENTS = "ADD_EVENTS",
    DELETE_EVENT = "DELETE_EVENT",
    SHOW_FILTERED_EVENTS = "SHOW_FILTERED_EVENTS",
    SHOW_ALL_EVENTS = "SHOW_ALL_EVENTS",
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

interface ShowFilteredEventsAction {
    type: EventsActionTypes.SHOW_FILTERED_EVENTS,
    payload: string,
}

interface ShowAllEventsAction {
    type: EventsActionTypes.SHOW_ALL_EVENTS,
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
    | ShowFilteredEventsAction
    | ShowAllEventsAction
    | SignUpEventsAction
    | LogOutEventsAction;