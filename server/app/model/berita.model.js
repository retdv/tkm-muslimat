const mongoose = require("mongoose");

const BeritaSchema = mongoose.Schema({
  judul: String,
  desc: String,
  foto: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Berita", BeritaSchema);
