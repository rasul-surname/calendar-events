export function getMonthYear(date: string): string {
    let arrDates = date.split(".");
    arrDates.shift();
    return arrDates.join('.');
}