const express = require("express");
require("dotenv").config();
require("module-alias/register");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;
const bookroute = require("./route/book-route");
const authroute = require("./route/auth-route");
const authorroute = require("./route/author-route");
const reviewroute = require("./route/review-route");
const customerroute = require("./route/customer-route");
const errorMiddleWare = require("./middleware/error-middleware");
const data = require("@authcontroller");
console.log(data);
app.use(express.json());
app.use(cookieParser());
app.use("/api/books", bookroute);
app.use("/api/author", authorroute);
app.use("/api/review", reviewroute);
app.use("/api/auth", authroute);
app.use("/api/customer", customerroute);
app.use(errorMiddleWare);

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./route/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
