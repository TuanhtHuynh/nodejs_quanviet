const text = require("body-parser/lib/types/text");
const mongoose = require("mongoose");
const sequense = require("./counterModel");

let schema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "vui lòng điền thông tin"],
    minlength: [5, "ít nhất 6 kí tự"],
    unique: true,
    trim: true,
  },
  slug: String,
  status: String,
});

schema.pre("save", function (next) {
  let doc = this;
  sequense
    .getSquenceNextValue("category_id")
    .then(function (counter) {
      doc._id = counter;
      next();
    })
    .catch(function (err) {
      next(err);
    });
});

schema.index({ name: "text" });
const Category = mongoose.model("category", schema);
module.exports = Category;
