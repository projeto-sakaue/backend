
module.exports = (req, res, next) => {
  const user = req.body;

  if (user.privacyPolicyAccept == false) {
    return res.status(400).json({ message: 'A política de privacidade deve ser aceita.' });
  }

  next();
};
