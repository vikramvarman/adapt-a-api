import pgPromise from "pg-promise";

export const foodDb = pgPromise({
  promiseLib: Promise,
})({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: "postgres",
});

foodDb
  .connect()
  .then((obj) => {
    console.log("Connected to food db successfully");
    obj.done(); // success, release connection;
  })
  .catch((error) => {
    console.log(process.env.PGHOST, process.env.PGUSER, process.env.PGPASSWORD);
    console.error("ERROR IN CONNECTING to food db:", error.message);
  });
