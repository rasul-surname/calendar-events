export function getLogOutEventsById(listEvents: number[], idEvent: number): number[] {
    return listEvents.filter(elem => elem !== idEvent);
}