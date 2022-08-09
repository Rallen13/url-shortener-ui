describe("URL Shortener Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      fixture: "urls",
    });
    cy.visit("http://localhost:3000");
  });

  it("should contain a heading", () => {
    cy.dataCy("app-heading").contains("URL Shortener");
  });
});
