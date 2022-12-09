import express, { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

const YAML = require("yamljs");
const apiDocument = YAML.load("src/api.yaml");

const app: Express = express();

app.use(cors());

app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocument));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.use("/api/", routes);

export default app;
