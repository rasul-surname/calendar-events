export function formatDate(fullDate: string) {
    if(Date.parse(fullDate)) {
        let date_DD_MM_YYYY = fullDate.split("T")[0];
        return date_DD_MM_YYYY.split("-").reverse().join(".");
    }

    return 'Дата не валидная';
}