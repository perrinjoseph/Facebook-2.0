exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    succes: "success",
    data: "You now have access to this route",
    user: req.user,
  });
};
