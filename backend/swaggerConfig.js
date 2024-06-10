const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bank API",
      version: "1.0.0",
      description: "API documentation for Bank application",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {
        CreditContract: {
          type: "object",
          properties: {
            id: { type: "integer" },
            number: { type: "string" },
            issueDate: { type: "string", format: "date-time" },
            creditAmount: { type: "number" },
            usagePeriod: { type: "integer" },
            interestRate: { type: "number" },
            monthlyPayment: { type: "number" },
            clientId: { type: "integer" },
            creditExpertId: { type: "integer" },
            creditPurposeId: { type: "integer" },
            accountId: { type: "integer" },
          },
        },
        Currency: {
          type: "object",
          properties: {
            id: { type: "integer" },
            code: { type: "string" },
            name: { type: "string" },
            shortName: { type: "string" },
            exchangeRate: { type: "number" },
          },
        },
        Account: {
          type: "object",
          properties: {
            id: { type: "integer" },
            number: { type: "string" },
            currencyId: { type: "integer" },
            accountType: {
              type: "string",
              enum: ["SAVINGS", "CHECKING", "CREDIT"],
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // путь к файлам с вашими маршрутами
};

const specs = swaggerJSDoc(options);

module.exports = specs;
