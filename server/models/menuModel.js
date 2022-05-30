const mongoose = require("mongoose");
const sequense = require("./counterModel");

let menuSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    menu_name: {
      type: String,
      required: [true, "Vui lòng điền thông tin"],
      minlength: [5, "Ít nhất 5 kí tự"],
      trim: true,
      unique: true,
    },
    url: { type: String },
    submenus: [
      {
        type: Number,
        ref: "submenuheader",
      },
    ],
    actived: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

menuSchema.pre("save", function (next) {
  let doc = this;
  sequense
    .getSquenceNextValue("menu_id")
    .then(function (counter) {
      doc._id = counter;
      next();
    })
    .catch(function (err) {
      next(err);
    });
});

const menus = mongoose.model("menu", menuSchema);
module.exports = menus;
