const axios = require("axios");
const express = require("express");
const router = express.Router();

// const services = require("../services/render");
const categoryController = require("../controllers/categoryController");

/*
 * @method GET / index
 */
router.get("/", categoryController.index);

router.get("/:id", categoryController.edit);

router.post("/new", categoryController.create_post);
router.put("/", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
