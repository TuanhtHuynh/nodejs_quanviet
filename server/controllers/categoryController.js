const Category = require("../models/category");

exports.index = async (req, res) => {
  try {
    let {
      page = 1,
      size = 2,
      query = "",
      sort = "name",
      order = "asc",
    } = req.query;

    const limit = parseInt(size);
    const skip = (page - 1) * limit;
    const filter = query ? { $text: { $search: query } } : {};

    const categories = await Category.find(filter)
      .limit(limit)
      .skip(skip)
      .sort({ [sort]: order })
      .exec();
    const count_item = await Category.find(filter).countDocuments().exec();
    const totalpages = Math.ceil(count_item / limit);
    res.json({ categories, page, size, count_item, totalpages });
  } catch (error) {
    // res.session.message = {
    //   type: "danger",
    //   intro: error.message,
    // };
    // res.redirect("/admin/categories");
  }
};

const handleErrors = (err) => {
  let errors = { name: "" };

  // validation unique name
  if (err.code === 11000) {
    errors.name = "danh mục đã có";
    return errors;
  }

  //validation errors
  if (err.message.includes("category validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.create_get = (req, res) => {
  res.render("admin/categories/category_new", {
    errors: {},
    category: req.body,
  });
};

exports.create_post = async (req, res) => {
  // new category
  const category = new Category(req.body);
  try {
    // save category
    const result = await category.save();
    res.status(200).json({
      message: {
        type: "success",
        intro: "đã thêm sản phẩm",
      },
    });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findOne({ _id: id });
    if (!category) {
      res.redirect("/categories");
    }
    res.render("admin/categories/category_update", {
      category: category,
    });
  } catch (error) {
    res.render("admin/categories/category_update", {
      category: category,
      errors: `lỗi không tìm thấy category ${id}`,
    });
  }
};

exports.update = async (req, res) => {
  try {
    let id = req.body.id;
    const resp = await Category.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    if (resp) {
      res.status(200).send({
        message: {
          type: "success",
          intro: "Đã cập nhật danh mục",
        },
      });
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send({ errors });
  }
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Category.findOneAndDelete({ _id: id })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `không thể xoá category ${id}` });
      } else {
        res.json({ redirect: "/categories" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `không thể xoá category ${id}` });
    });
};
