const allModels = require("../models");
const constants = require("../constants");
const sendEmail = require("../utils/sendEmail");
//REGISTER
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  //You can also hash the password here before creating the User instance, but the bcrypt is done in the model as a middleware using pre save.
  const user = await allModels.User.findOne({ email });
  if (!user) {
    try {
      const user = await allModels.User.create({
        username,
        email,
        password,
      });
      sendToken(user, 201, res);
    } catch (err) {
      res.status(400).json({
        success: "failed",
        error: err.message,
      });
    }
  }
  res
    .status(400)
    .json({ success: "failed", error: constants.REGISTER_USER_EXISTS });
};

//LOGIN
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: "failed",
      error: constants.PLEASE_PROVIDE_LOGIN_CRED,
    });
  }

  try {
    const user = await allModels.User.findOne({ email }).select("+password");
    if (!user) {
      res
        .status(404)
        .json({ success: "failed", error: constants.INVALID_CRED });
    }

    const matched = await user.matchPassword(password);
    if (!matched) {
      res
        .status(404)
        .json({ success: "failed", error: constants.INVALID_CRED });
    }
    sendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      success: "success",
      error: err.message,
    });
  }
};

//FORGOT PASSWORD
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await allModels.User.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: "failed",
        message: constants.REGISTER_USER_DOES_NOT_EXISTS,
      });
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;
    const message = `
    <h1>You have requested a new password reset</h1>
    <p> Please click on this link to reset password </p>
    <a href=${resetUrl} clicktracking=off >${resetUrl}</a>
    `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password reset request",
        html: message,
      });
      res.status(200).json({
        success: "success",
        message: "Email sent",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      res.status(500).json({
        success: "failed",
        error: "Email could not be sent. " + error.message,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: "failed",
      error: "Opps something went wrong! Please try again later." + err.message,
    });
  }
};

//RESET PASSWORD
exports.resetPassword = (req, res, next) => {
  res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: "success", token });
};
