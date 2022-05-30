const fs = require("fs");

exports.uploadImage = (req, res) => {
  if (!req.file) {
    res.status(400).send({ msg: "failed", type: "danger" });
  } else {
    res.send({ msg: "uploaded", type: "success", file: req.file.filename });
  }
};
