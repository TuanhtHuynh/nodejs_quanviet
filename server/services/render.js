const axios = require("axios");

const URI = "http://localhost:3000";

exports.homeRoutes = (req, res) => {
  // make a get request to /api/categories
  axios
    .get(`${URI}`)
    .then((response) => {
      res.render("index", { categories: response.data });
    })
    .catch((err) => res.send(err));
};

exports.add_category = (req, res) => {
  res.render("category/category_new", { errors: {}, category: req.body });
};

exports.update_category = (req, res) => {
  axios
    .get(`${URI}/api/categories/${req.params.id}`)
    .then((categorydata) => {
      res.render("category/category_update", { category: categorydata.data });
    })
    .catch((err) => res.send(err));
};
