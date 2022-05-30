const express = require("express");
const route = express.Router();
const authController = require("../controllers/authController");

route.get("/register", authController.get_register);
route.post("/register", authController.post_register);

route.get("/admin_login", authController.get_admin_login);
route.post("/admin_login", authController.post_admin_login);

module.exports = route;
