import Terrastruct from "./Terrastruct";

describe("Terrastruct", () => {
  const match = Terrastruct.ENABLED[0];

  test("to be enabled on app link", () => {
    expect(
      "https://app.terrastruct.com/diagrams/1188608868".match(match)
    ).toBeTruthy();
  });

  test("to be enabled on app link with anchor params", () => {
    expect(
      "https://app.terrastruct.com/diagrams/1188608868/edit#layer=1999887179".match(
        match
      )
    ).toBeTruthy();
  });

  test("to not be enabled elsewhere", () => {
    expect("https://terrastruct.com".match(match)).toBe(null);
    expect("https://app.terrastruct.com".match(match)).toBe(null);
    expect("https://www.terrastruct.com".match(match)).toBe(null);
    expect("https://www.terrastruct.com/diagrams".match(match)).toBe(null);
  });
});
