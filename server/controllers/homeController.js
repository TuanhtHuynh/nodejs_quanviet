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
    // res.send({
    //   products,
    //   page,
    //   size,
    //   count_item,
    //   totalpages,
    //   query,
    //   sort,
    //   order,
    //   layout: "./layouts/layout_home",
    //   script: "/js/products/product_index.js",
    // });
    console.log("data ", products);
    res.render("./home/index", {
      products,
      page,
      size,
      count_item,
      totalpages,
      query,
      sort,
      order,
      layout: "./layouts/layout_home",
      script: "/js/products/product_index.js",
    });
  } catch (error) {
    console.log(error.message);
    // res.session.message = {
    //   type: "danger",
    //   intro: error.message || "xảy ra lỗi",
    // };
    // res.redirect("/admin/products");
  }
};
