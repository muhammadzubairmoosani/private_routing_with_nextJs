const express = require("express");
const app = express();
const mongodb = require("./src/config");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./src/routers"));

app.listen("4000", () => console.log(`server is listing on port 4000`));

mongodb.connection.once("open", () => console.log("database is connected!"));
