const mongoose = require("mongoose");
const sequese = require("./counterModel");

const UserSchema = new mongoose.Schema(
  {
    uid: Number,
    username: {
      type: String,
      required: [true, "vui lòng điền tên"],
      minlength: [5, "ít nhất 5 kí tự"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "vui lòng điền email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "vui lòng điền mật khẩu"],
      minlength: [6, "ít nhất 6 kí tự"],
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    status: String,
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  let doc = this;
  sequese
    .getSquenceNextValue("user_id")
    .then(function (counter) {
      doc.uid = counter;
      next();
    })
    .catch(function (error) {
      next(error);
    });
});

UserSchema.index({ username: "text" });
const User = mongoose.model("user", UserSchema);

module.exports = User;
