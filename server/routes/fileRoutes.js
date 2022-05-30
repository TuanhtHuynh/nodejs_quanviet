const express = require("express");
const route = express.Router();
const multerService = require("../services/multerService");
const fileController = require("../controllers/fileController");

route.post(
  "/image",
  multerService.upload.single("image"),
  fileController.uploadImage
);

module.exports = route;
