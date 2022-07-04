import {formatDate} from "./formatDate";

describe("formatDate должна вернуть дату в формате день.месяц.год", () => {
    test("Корректное значение", () => {
        expect(formatDate('2021-11-27T10:34:03.313Z')).toBe('27.11.2021')
    })
    test("Некорректное значение", () => {
        expect(formatDate('мешанина')).toBe('Дата не валидная')
    })
})