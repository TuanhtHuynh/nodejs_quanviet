const mongoose = require("mongoose");

const connect = async () => {
  try {
    const constr = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log("Mongodb connected");
    return constr;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const close = () => {
  mongoose.connection.close();
};

module.exports = { connect, close };
