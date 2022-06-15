export function replaceEventsById<T extends {id: number, name: string, surname: string }>(listEvents: T[], idEvents: number, nameEvents: string, surnameEvents: string): T[] {
    return listEvents.map(elem => {
        if(elem.id == idEvents) {
            elem.name = nameEvents;
            elem.surname = surnameEvents;
        }

        return elem;
    });
}