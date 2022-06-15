import {formatDate} from "../date/formatDate";

export function convertPayload<T extends {date: string}>(payload: T[]): T[] {
    return payload.map(event => {
        return {...event, date: formatDate(event.date), name: "", surname: ""};
    });
}