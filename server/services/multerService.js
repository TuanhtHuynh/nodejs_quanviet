const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/upload");
  },
  filename: (req, file, cb) => {
    console.log(file.filename);
    console.log(file.originalname);
    cb(
      null,
      Date.now() +
        "_" +
        file.originalname.split(".")[0] +
        path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

exports.upload = upload;
