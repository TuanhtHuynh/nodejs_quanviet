const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.get_register = (req, res) => {
  res.render("auth/register", {
    user: req.body,
    errors: {},
  });
};

const handleRegisterErrors = (err) => {
  let errors = { username: "", email: "", password: "" };

  if (err.Code === 11000) {
    errors.username = "user đã có";
    errors.email = "email đã có người đăng kí";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach((properties) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.post_register = async (req, res) => {
  try {
    const { username, password: plainTextPassword, email, role } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);
    const user = await new User({
      username,
      password,
      email,
      role,
      status: "active",
    });
    const response = await user.save(user);
    res.status(200).send(response);
  } catch (error) {
    const errors = handleRegisterErrors(error);
    res.status(400).send({ errors });
  }
};

exports.get_admin_login = (req, res) => {
  res.render("admin/admin_login", { layout: false });
};

exports.post_admin_login = async (req, res) => {
  // try {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();
  if (!user) {
    return res.status(404).send({
      message: {
        type: "danger",
        intro: "user/mật khẩu không hợp lệ",
      },
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.SECRET
    );
    res.locals.role = "user:sale";
    return res.status(200).send({ token, redirect: "/admin" });
  }
  res.status(400).send({
    message: {
      type: "danger",
      intro: "user/mật khẩu không hợp lệ",
    },
  });
};
