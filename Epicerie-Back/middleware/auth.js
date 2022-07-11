const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies?.userToken;
  if (!token) {
    res.sendStatus(401);
    return;
  }
  payload = jwt.verify(token, process.env.JWT_SECRET);
  if (!payload) {
    res.sendStatus(401);
    return;
  }
  req.user = payload.user;
  next();
};

module.exports = { verifyToken };
