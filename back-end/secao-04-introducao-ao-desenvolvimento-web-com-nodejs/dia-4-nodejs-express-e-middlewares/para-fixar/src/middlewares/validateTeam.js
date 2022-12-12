const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];

  if (requiredProperties.every((property) => property in req.body)) {
    return next();
  }

  res.status(400).json({ message: 'All atributes needed' });
};

module.exports = {
  validateTeam,
};
