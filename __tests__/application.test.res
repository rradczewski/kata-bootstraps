open Jest

describe("Application", () => {
  open Expect
  open! Expect.Operators

  test("fails", () => expect(false) === true)

  test("suceeds", () => expect(true) === true)
})
