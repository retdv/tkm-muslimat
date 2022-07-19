const jwt = require("jsonwebtoken");
const User = require("../model/user.model.js");

exports.refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await User.findOne({
      refreshToken: refreshToken,
    });
    if (!user) return res.sendStatus(403);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const userId = { id: user.id };
        const accessToken = jwt.sign(
          { userId },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "30s",
          }
        );
        res.json(accessToken);
      }
    );
  } catch (error) {
    console.error(error);
  }
};
