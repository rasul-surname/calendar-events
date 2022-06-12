export function getEventsWithoutId<T extends { id: number }>(listEvents: T[], idEvent: number): T[] {
    return listEvents.filter(elem => elem.id !== idEvent);
}