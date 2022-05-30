const Menu = require("../models/menuModel");
const SubMenu = require("../models/submenuheader");

const handleErrors = (error) => {
  let errors = { menu_name: "", url: "" };

  if (error.code === 11000) {
    errors.menu_name = "menu đã có";
    return errors;
  }
  if (error.message.includes("menu validation failed")) {
    Object.values(error.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const handleSubErrors = (error) => {
  let errors = { submenu_name: "", url: "", menu_id: "" };

  if (error.code === 11000) {
    errors.submenu_name = "menu đã có";
    return errors;
  }
  if (error.message.includes("submenuheader validation failed")) {
    Object.values(error.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

exports.index = async (req, res) => {
  try {
    const menus = await Menu.find({})
      .populate({
        path: "submenus",
        populate: {
          path: "submenus",
          model: "submenuheader",
        },
      })
      .exec();
    res.json({ menus });
  } catch (err) {
    res
      .status(400)
      .send({ intro: "Lỗi tải danh sách menu", error: err.message });
  }
};

exports.create_menu_post = async (req, res) => {
  const menu = new Menu(req.body);
  try {
    const result = await menu.save();
    if (result) {
      const message = { intro: "Thêm thành công", type: "success" };
      res.status(200).json({ message });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

exports.create_submenu_post = async (req, res) => {
  const menu_id = req.params.id;
  const submenu = new SubMenu(req.body);
  try {
    const result = await submenu.save();
    let rs = await Menu.findOneAndUpdate(
      { _id: menu_id },
      { $push: { submenus: result._id } },
      { upsert: true, new: true }
    );

    const message = { intro: "Thêm thành công", type: "success" };
    res.status(200).json({ message });
  } catch (err) {
    const errors = handleSubErrors(err);
    res.status(400).json({ errors });
  }
};

exports.create_submenu2_post = async (req, res) => {
  const submenu_id = req.params.id;
  const subheader = new SubMenu(req.body);
  try {
    const result = await subheader.save();
    let rs = await SubMenu.findOneAndUpdate(
      { _id: submenu_id },
      { $push: { submenus: result._id } },
      { upsert: true, new: true }
    );

    const message = { intro: "Thêm thành công", type: "success" };
    res.status(200).json({ message });
  } catch (error) {
    const errors = handleSubErrors(error);
    res.status(400).json({ errors });
  }
};

exports.delete_subheader = async (req, res) => {
  const id = req.params.id;
  try {
    const subheader = await SubMenu.findOneAndDelete({ _id: id });
    await Menu.findOneAndUpdate(
      { _id: subheader.menu_id },
      { $pull: { submenus: id } }
    );
    const message = {
      intro: "Đã xoá " + subheader.submenu_name,
      type: "success",
    };
    res.status(200).json({ message });
  } catch (error) {
    const message = { intro: "Không tìm thấy menu id" + id, type: "danger" };
    res.status(404).json({
      message,
    });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.uid;
  try {
    const menu = await Menu.findOne({ _id: id }).populate({
      path: "submenus",
      populate: {
        path: "submenus",
        model: "submenuheader",
      },
    });
    res.status(200).json({ menu });
  } catch (error) {
    const message = { intro: "Không tìm thấy menu id" + id, type: "danger" };
    res.status(404).json({
      message,
    });
  }
};

exports.edit_submenu1 = async (req, res) => {
  const id = req.params.id;
  try {
    const menu = await SubMenu.findOne({ _id: id })
      .populate("submenus", "submenu_name url")
      .populate("submenus.submenus", "submenu_name url");
    res.status(200).json({ menu });
  } catch (error) {
    const message = { intro: "Không tìm thấy menu id" + id, type: "danger" };
    res.status(404).json({
      message,
    });
  }
};

exports.update_menu = async (req, res) => {
  await Menu.findOneAndUpdate(
    {
      uid: req.body.uid,
    },
    req.body,
    { new: false }
  )
    .then((data) =>
      res.json({
        intro: "Đã cập nhật",
        type: "success",
      })
    )
    .catch((err) => {
      const errors = handleErrors(err);
      res.status(404).json({
        error: errors,
      });
    });
};

exports.delete_menu = async (req, res) => {
  await Menu.findOneAndDelete({ uid: req.params.uid })
    .then((resp) =>
      res.status(200).json({ intro: "Đã xoá menu", type: "success" })
    )
    .catch((err) =>
      res.status(404).json({ intro: "không thể xoá menu", type: "danger" })
    );
};
