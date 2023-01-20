const { checkGamerTag } = require("../validations");

describe("checkGamerTag test validation", () => {
    it("should return false when entering nothing", () => {
        expect(checkGamerTag("")).toBe(false);
    });
    it("should return false when entering a tag shorter than 8 chars", () => {
        expect(checkGamerTag("JeanKe!")).toBe(false);
    });
    it("should return false when entering a tag that doesn't contain a special char", () => {
        expect(checkGamerTag("JeanKevin")).toBe(false);
    });
    it("should return false when entering a tag that only contains a special char", () => {
        expect(checkGamerTag("JeanKevin@")).toBe(false);
    });
    it("should return true when entering a tag that contains a special char", () => {
        expect(checkGamerTag("JeanKevin@1")).toBe(true);
    });
});
