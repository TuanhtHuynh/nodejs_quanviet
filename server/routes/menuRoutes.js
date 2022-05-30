const express = require("express");
const router = express.Router();
const authMiddleware = require("../services/auth-middleware");

const menuController = require("../controllers/menuController");

router.get("/", menuController.index);

router.post("/new", menuController.create_menu_post);

router.post("/sub-1/:id/new", menuController.create_submenu_post);

router.post("/sub-2/new/:id/sub-1", menuController.create_submenu2_post);

router.delete("/:uid", menuController.delete_menu);

router.delete("/sub-1/:id", menuController.delete_subheader);

router.get("/edit/:uid", menuController.edit);

router.get("/sub-1/edit/:id", menuController.edit_submenu1);

router.put("/update", menuController.update_menu);
module.exports = router;
