const hasDescritionAndKeys = (descriptionValue, res, field) => {
  if (!descriptionValue) {
    return res.status(400).json({ message: `o campo ${field} é obrigatório`})
  }
};


const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return hasDescritionAndKeys(description, res, 'description')
    || hasDescritionAndKeys(description.createdAt, res, 'createdAt')
    || hasDescritionAndKeys(description.rating, res, 'rating')
    || hasDescritionAndKeys(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = validateDescription;
