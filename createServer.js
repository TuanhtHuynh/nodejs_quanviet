const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
//const session = require("express-session");
//const exprLayout = require("express-ejs-layouts");
const routes = require("./appRoutes");

const createServer = () => {
  let app = express();

  dotenv.config({ path: "dev.env" });

  //log request
  app.use(morgan("dev"));
  app.use(cors());
  // parse request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  // app.use(
  //   session({
  //     secret: "key",
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { maxAge: 60 * 1000 },
  //   })
  // );

  app.use("/css", express.static(path.join(__dirname, "assets/css")));
  app.use("/js", express.static(path.join(__dirname, "assets/js")));
  app.use("/uploads", express.static(path.join(__dirname, "assets/upload")));
  app.use("/ckeditor", express.static(path.join(__dirname, "assets/ckeditor")));

  routes(app);
  return app;
};

module.exports = createServer;
