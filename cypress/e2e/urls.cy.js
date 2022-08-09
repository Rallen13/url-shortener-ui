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

  it("should be to fill out the form inputs", () => {
    cy.dataCy("url-title-input")
      .type("LinkedIn")
      .should("have.value", "LinkedIn");
    cy.dataCy("url-short-input")
      .type("https://www.linkedin.com/in/rachel-lynn-allen/")
      .should("have.value", "https://www.linkedin.com/in/rachel-lynn-allen/");
  });

  it("should be able to submit the form and a new shortened url should render", () => {
    cy.dataCy("url-title-input")
      .type("LinkedIn")
      .should("have.value", "LinkedIn");
    cy.dataCy("url-short-input")
      .type("https://www.linkedin.com/in/rachel-lynn-allen/")
      .should("have.value", "https://www.linkedin.com/in/rachel-lynn-allen/");

    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      fixture: "postUrl",
    });
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      fixture: "addedUrls",
    });
    cy.dataCy("shorten-please-button")
      .click()
      .then(() => {
        cy.dataCy("url-card")
          .last()
          .within(() => {
            cy.dataCy("url-title").contains("LinkedIn");
            cy.dataCy("url-short").contains(
              "http://localhost:3001/useshorturl/2"
            );
            cy.dataCy("url-long").contains(
              "https://www.linkedin.com/in/rachel-lynn-allen/"
            );
          });
      });
  });
});
