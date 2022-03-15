const result = require("./exercise-2");

describe("Exercise 2", () => {
  it("filters the correct data", () => {
    const answer = [
      {
        firstName: "Michael",
        lastName: "Scott",
        position: "Regional Manager",
        isAdmin: true,
        age: 40,
      },
    ];
    expect(result).toStrictEqual(answer);
  });
});
