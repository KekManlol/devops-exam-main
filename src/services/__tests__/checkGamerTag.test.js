const { checkGamerTag } = require('../validations');

describe("checkGamerTag test validation", () => {
    it("should return false when entering nothing",() => {
        expect(checkGamerTag("")).toBe(false);
    });
    it("should return false when entering a tag shorter than 8 chars", () => {
        expect(checkGamerTag("JeanKev")).toBe(false);
    });
});