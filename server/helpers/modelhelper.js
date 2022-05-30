const sequense = require("../models/counterModel");

exports.presave = function (next) {
  let doc = this;
  sequense
    .getSquenceNextValue("product_id")
    .then(function (counter) {
      doc.uid = counter;
      next();
    })
    .catch(function (err) {
      next(err);
    });
};
