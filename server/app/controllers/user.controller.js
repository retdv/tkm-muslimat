const path = require("path");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model.js");

// getusers
exports.getusers = async (req, res) => {
  //   try {
  //     const users = User.find();
  //     res.json(users);
  //   } catch (error) {
  //     console.log(error);
  //   }
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};
// register
exports.register = async (req, res) => {
  const { id, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    return res.status(400).json({ msg: "password confirm tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      id: id,
      password: hashPassword,
    });
    res.json({ msg: "data berhasil dibuat" });
  } catch (error) {
    console.error(error);
  }
};
// login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      id: req.body.id,
    });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).send({ msg: "password salah" });
    }
    const userId = { id: user.id };
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "20s",
    });
    const refreshToken = jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.findOneAndUpdate(userId, { resfresh_token: refreshToken });
    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .cookie("logged", "logged", {
        maxAge: 24 * 60 * 60 * 1000,
      });
    res.json({ accessToken });
  } catch (err) {
    res.status(404).json({ msg: "id tidak ditemukan" });
    console.error(err);
  }
};

// logout
exports.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findOne({
    refreshToken: refreshToken,
  });
  if (!user) return res.sendStatus(204);
  const userId = user.id;
  await User.findOneAndUpdate(userId, { resfresh_token: null });
  res.clearCookie("refreshToken").clearCookie("logged");
  res.sendStatus(200);
};
