const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  if (res.locals.role == "user:sale") {
    next();
  } else {
    res.redirect("/log");
  }
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    req.isLogged = true;
    return next();
  }
  res.redirect("/");
}

const authorize = (credential = "") => {
  return (req, res, next) => {
    const token = req.headers["authorization"];
    console.log("token ", token.slice(7).trim());
    try {
      const decoded = jwt.verify(token.slice(7).trim(), process.env.SECRET);
      console.log("role ", credential);
      if (credential.length > 0) {
        if (decoded.role && credential == decoded.role) {
          next();
        } else {
          res.status(401).send({
            message: {
              type: "danger",
              intro: "không có quyền truy cập",
            },
          });
        }
      } else {
        next();
      }
    } catch (error) {
      res.status(401).send({
        message: {
          type: "danger",
          intro: "không có quyền truy cập",
        },
      });
    }
  };
};

module.exports = {
  authorize,
  isAuthenticated,
};
