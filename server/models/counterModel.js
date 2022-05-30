const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    required: true,
  },
});

const Counter = mongoose.model("Counter", CounterSchema);

const getSquenceNextValue = (seqName) => {
  return new Promise((resolve, reject) => {
    Counter.findOneAndUpdate(
      { _id: seqName },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
      .then((data) => {
        if (data) {
          resolve(data.seq);
        }
      })
      .catch((error) => reject(error));
  });
};

module.exports = {
  Counter,
  getSquenceNextValue,
};
