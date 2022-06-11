export function getSignUpEventsByID<T extends {id: number}>(listEvents: T[], idEvent: number): T[] {
    return listEvents.filter(event => event.id == idEvent);
}