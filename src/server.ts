import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

dotenvExpand.expand(dotenv.config());

console.log("app initiated");

import app from "./app";

const PORT = 8080;
const HOST = "0.0.0.0";

// const HOST = process.env.HOST;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is listening on port ${PORT}`)
);
