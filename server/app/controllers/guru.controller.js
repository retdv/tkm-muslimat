const Guru = require("../model/guru.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const guru = new Guru({
    nama: req.body.nama,
    desc: req.body.desc,
    foto: req.body.foto,
  });
  guru
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data guru.",
      });
    });
};

// Retrieve all data  from the database.
exports.findAll = (req, res) => {
  Guru.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data Guru.",
      });
    });
};

// Find a single data with a dataId
exports.findOne = (req, res) => {
  Guru.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving data with id " + req.params.id,
      });
    });
};

// Update a data identified by the dataId in the request
exports.update = (req, res) => {
  Guru.findByIdAndUpdate(
    req.params.id,
    {
      nama: req.body.nama,
      desc: req.body.judul,
      foto: req.body.foto,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating guru with id " + req.params.id,
      });
    });
};

// Delete a data with the specified id in the request
exports.delete = (req, res) => {
  Guru.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      res.send({ message: "guru deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "guru not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete guru with id " + req.params.id,
      });
    });
};
