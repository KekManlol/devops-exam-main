const { checkGamerTag } = require('../validations');

describe("checkGamerTag test validation", () => {
    it("should return false when entering nothing",() => {
        expect(checkGamerTag("")).toBe(false);
    });
});