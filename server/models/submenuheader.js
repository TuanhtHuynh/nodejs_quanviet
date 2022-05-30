const mongoose = require("mongoose");
const sequense = require("./counterModel");

let submenuheaderSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    submenu_name: {
      type: String,
      required: [true, "Vui lòng điền tông tin"],
    },
    menu_id: {
      type: Number,
      ref: "menu",
      required: [true, "Vui lòng chọn menu"],
    },
    url: {
      type: String,
      required: [true, "Vui lòng dien thông tin"],
    },
    submenus: [{ type: Number, ref: "submenuheader" }],
    actived: { type: Boolean, default: true },
  },
  { versionKey: false }
);

submenuheaderSchema.pre("save", function (next) {
  let doc = this;
  sequense
    .getSquenceNextValue("submenuheader_id")
    .then(function (counter) {
      doc._id = counter;
      next();
    })
    .catch(function (err) {
      next(err);
    });
});
const submenuheader = mongoose.model("submenuheader", submenuheaderSchema);
module.exports = submenuheader;
