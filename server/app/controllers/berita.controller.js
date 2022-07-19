const Berita = require("../model/berita.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const berita = new Berita({
    judul: req.body.judul,
    desc: req.body.desc,
    foto: req.body.foto,
  });
  berita
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the berita.",
      });
    });
};

// Retrieve all berita from the database.
exports.findAll = (req, res) => {
  Berita.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving berita.",
      });
    });
};

// Find a single data with a dataId
exports.findOne = (req, res) => {
  Berita.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving berita with id " + req.params.id,
      });
    });
};

// Update a berita identified by the berita in the request
exports.update = (req, res) => {
  Berita.findByIdAndUpdate(
    req.params.id,
    {
      judul: req.body.judul,
      desc: req.body.judul,
      foto: req.body.foto,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating berita with id " + req.params.id,
      });
    });
};

// Delete a message with the specified id in the request
exports.delete = (req, res) => {
  Berita.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      res.send({ message: "berita deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "berita not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete berita with id " + req.params.id,
      });
    });
};
