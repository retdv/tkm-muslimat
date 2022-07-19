const mongoose = require("mongoose");

const GuruSchema = mongoose.Schema({
  nama: String,
  desc: String,
  foto: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Guru", GuruSchema);
