const express = require("express");
const router = express.Router();
const authMiddleware = require("../services/auth-middleware");

const productController = require("../controllers/productController");

router.get("/", productController.index);

router.get("/new", productController.get_create);

router.post("/new", productController.create_post);

router.delete("/:uid", productController.delete);

router.get("/edit/:uid", productController.edit_get);

router.put("/update", productController.update_post);
module.exports = router;
