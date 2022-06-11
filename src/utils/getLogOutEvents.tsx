export function getLogOutEvents<T extends { id: number }>(listEvents: T[], idEvent: number): T[] {
    return listEvents.filter(elem => elem.id !== idEvent);
}