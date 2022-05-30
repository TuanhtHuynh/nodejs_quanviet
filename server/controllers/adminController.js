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
    const skip = (page - 1) * size;
    const filter = query ? { $text: { $search: query } } : {};

    const categories = await Category.find(filter)
      .limit(limit)
      .skip(skip)
      .sort({ [sort]: order })
      .exec();
    const count_item = await Category.find(filter).countDocuments().exec();
    const totalpages = Math.ceil(count_item / size);
    // res.send({ categories, page, size, count_item, totalpages });
    res.render("admin/categories/admin_index", {
      categories,
      page,
      size,
      count_item,
      totalpages,
      query,
      sort,
      order,
      script: "/js/categories/categories_index.js",
    });
  } catch (error) {
    console.log("error ", error);
    // res.session.message = {
    //   type: "danger",
    //   intro: error.message,
    // };
    // res.redirect("/admin/categories");
  }
};
