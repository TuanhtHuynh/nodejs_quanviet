const mongoose = require("mongoose");
const sequense = require("./counterModel");
const modelhelper = require("../helpers/modelhelper");

const productSchema = new mongoose.Schema(
  {
    uid: Number,
    product_name: {
      type: String,
      required: [true, "Vui lòng điền thông tin"],
      minlength: [5, "Ít nhất 5 kí tự"],
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "vui lòng điền giá tiền"],
      min: [1000, "không được nhỏ hơn 1000"],
    },
    status: { type: String, default: "active" },
    category: {
      type: Number,
      ref: "category",
      required: [true, "vui lòng chọn danh mục"],
      min: [1, "Vui lòng chọn danh mục"],
    },
    description: { type: String, default: "" },
    cover: { type: String, default: "" },
    slug: String,
  },
  { timestamps: true, versionKey: false }
);

productSchema.pre("save", modelhelper.presave);

productSchema.index({ product_name: "text" });
const products = mongoose.model("product", productSchema);
module.exports = products;
