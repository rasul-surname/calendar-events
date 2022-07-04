export function getMonthYear(date: string): string {
    let arrDates = date.split(".");
    if(arrDates.length === 3) {
        arrDates.shift();
        return arrDates.join('.');
    }

    return date;
}