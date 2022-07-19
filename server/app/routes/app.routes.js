module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const Berita = require("../controllers/berita.controller.js");
  const Guru = require("../controllers/guru.controller.js");
  const verifyToken = require("../middleware/verifyToken");
  const refreshToken = require("../controllers/refreshToken");

  app.post("/login", User.login);

  app.post("/register", User.register);

  app.delete("/logout", User.logout);

  app.get("/getusers", verifyToken.verify, User.getusers);

  app.get("/token", refreshToken.refresh);

  app.post("/create-berita", verifyToken.verify, Berita.create);
  app.post("/create-guru", verifyToken.verify, Guru.create);

  app.get("/get-berita", verifyToken.verify, Berita.findAll);
  app.get("/get-guru", verifyToken.verify, Guru.findAll);

  app.get("/berita/:id", verifyToken.verify, Berita.findOne);
  app.get("/guru/:id", verifyToken.verify, Guru.findOne);

  app.put("/berita/:id", verifyToken.verify, Berita.update);
  app.put("/guru/:id", verifyToken.verify, Guru.update);

  app.delete("/berita/:id", verifyToken.verify, Berita.delete);
  app.delete("/guru/:id", verifyToken.verify, Guru.delete);
};
