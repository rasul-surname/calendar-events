import {getMonthYear} from "./getMonthYear";


describe("getMonthYear должна вернуть из даты месяц.год", () => {
    test("Корректное значение", () => {
        expect(getMonthYear("18.12.2021")).toBe("12.2021")
    })
    test("Некорректное значение", () => {
        expect(getMonthYear("18-12-2021")).toBe("18-12-2021")
    })
})