import {getMonthYear} from "../date/getMonthYear";

export function getFilterEventsByDate<T extends {date: string}>(listEvents: T[], date: string): T[] {
    return listEvents.filter(event => getMonthYear(event.date) === date);
}