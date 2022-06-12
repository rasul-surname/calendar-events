import {formatDate} from "../date/formatDate";

export function convertPayload<T extends {date: string}>(payload: T[]): T[] {
    return payload.map(event => {
        event.date = formatDate(event.date);
        return event;
    });
}