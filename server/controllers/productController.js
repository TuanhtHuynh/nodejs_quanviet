const Category = require("../models/category");
const Product = require("../models/productsModel");

exports.index = async (req, res) => {
  try {
    let {
      page = 1,
      size = 2,
      query = "",
      sort = "uid",
      order = "asc",
    } = req.query;

    const skip = (page - 1) * size;
    const filter = query ? { $text: { $search: query } } : {};

    const products = await Product.find(filter)
      .populate("category", "_id name")
      .limit(size)
      .skip(skip)
      .sort({ [sort]: order })
      .exec();
    const count_item = await Product.find(filter).countDocuments().exec();
    const totalpages = Math.ceil(count_item / size);
    res.json({
      products,
      page,
      size,
      count_item,
      totalpages,
      query,
      sort,
      order,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const handleErrors = (error) => {
  let errors = { product_name: "", price: "", category: "" };

  if (error.code === 11000) {
    errors.product_name = "sản phẩm đã có";
    return errors;
  }
  if (error.message.includes("product validation failed")) {
    Object.values(error.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const getCategories = () => {
  const categories = Category.find();
  return categories || [];
};

exports.get_create = async (req, res) => {
  try {
    const categories = await getCategories();
    res.render("admin/products/product_new", {
      errors: {},
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.create_post = async (req, res) => {
  const product = new Product(req.body);
  try {
    const result = await product.save();
    if (result) {
      res.status(200).json({
        message: {
          type: "success",
          intro: "đã thêm sản phẩm",
        },
      });
    }
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).send({ errors });
  }
};

exports.delete = async (req, res) => {
  const uid = req.params.uid;
  await Product.findOneAndDelete({ uid: uid })
    .then((data) => {
      res.send({ redirect: "/products" });
    })
    .catch((err) => {
      res.session.message = {
        type: "danger",
        intro: `không thể xoá ${id}`,
      };
    });
};

exports.edit_get = async (req, res) => {
  try {
    const product = await Product.findOne({ uid: req.params.uid }).populate(
      "category",
      "_id name"
    );
    const categories = await getCategories();
    res.json(product);
  } catch (error) {}
};

exports.update_post = async (req, res) => {
  await Product.findOneAndUpdate(
    {
      uid: req.body.uid,
    },
    req.body,
    {
      new: false,
    }
  )
    .then((data) => {
      res.json({
        type: "success",
        intro: "Cập nhật thành công",
      });
    })
    .catch(async (err) => {
      const categories = await getCategories();
      const errors = handleErrors(err);
      res.status(400).json({
        errors: errors || err.message,
      });
    });
};
