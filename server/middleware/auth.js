const jwt = require("jsonwebtoken");
const allModels = require("../models");
const constants = require("../constants");

//we are invoking next here because we want to use the next controler.
//for this route there are two controlers. Every request to the private route will go through this controler and then the next countroler.
// to go the next controler we use the next();
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({
        success: "failed",
        error: constants.UNAUTHORIZED,
      });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const user = await allModels.User.findById(decode.id);
      if (!user) {
        res.status(401).json({
          success: "failed",
          error: constants.UNAUTHORIZED,
        });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({
        success: "failed",
        error: error.message,
      });
    }
  }
};
