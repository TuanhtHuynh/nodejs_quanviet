const express = require("express");
const route = express.Router();

const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const authorize = require("../services/auth-middleware");

route.get("/", (req, res) => {
  res.render("admin/admin_dashboard", {
    script: "",
  });
});

route.get("/categories", categoryController.index);
route.get("/categories/new", categoryController.create_get);

route.get("/products", productController.index);
route.get("/products/new", productController.get_create);

route.get("/categories", categoryController.index);
route.get("/categories/new", categoryController.create_get);

module.exports = route;
