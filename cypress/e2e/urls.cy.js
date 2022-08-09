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

  it("should render one card to start", () => {
    cy.dataCy("url-card").should("have.length", 1);
  });

  it("should display a url card that displays title, shortened url, and long url", () => {
    cy.dataCy("url-card")
      .first()
      .within(() => {
        cy.dataCy("url-title").contains("Awesome photo");
        cy.dataCy("url-short").contains("http://localhost:3001/useshorturl/1");
        cy.dataCy("url-long").contains(
          "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        );
      });
  });

  it("should display a form with inputs for title, URL to Shorten, and a 'Shorten Please!' button", () => {
    cy.dataCy("url-form").within(() => {
      cy.dataCy("url-title-input").should("be.visible");
      cy.dataCy("url-short-input").should("be.visible");
      cy.dataCy("shorten-please-button").should("be.visible");
    });
  });
});
