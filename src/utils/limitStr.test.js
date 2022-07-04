import {limitStr} from "./limitStr";

describe("limitStr должна вернуть ограниченное количество слов с троеточием на конце", () => {
    test("Корректное значение", () => {
        expect(limitStr("Раз два три", 3)).toBe("Раз два три");
    })
    test("Пустое значение", () => {
        expect(limitStr("", 3)).toBe("");
    })
    test("Значение с пробелами", () => {
        expect(limitStr("  ", 3)).toBe("");
    })
    test("Меньше корректного", () => {
        expect(limitStr("Раз", 3)).toBe("Раз");
    })
    test("Больше корректного", () => {
        expect(limitStr("Раз два три четыре пять шесть", 3)).toBe("Раз два три...");
    })
})