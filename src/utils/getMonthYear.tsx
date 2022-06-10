export function getMonthYear(date: string) {
    let arrDates = date.split(".");
    arrDates.shift();
    return arrDates.join('.');
}