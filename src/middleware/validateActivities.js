const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: 'O campo name é obrigatório' });
  } else if (name.length < 4) {
    res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    res.status(400).json({ message: 'O campo price é obrigatório' });
  }
  if (price < 0) {
    res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
  next();
};

// const validateDescription = (req, res, next) => {
//   const { description } = req.body;
//   if (description)
// };

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const formatedDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  console.log(createdAt);
  console.log(formatedDate.test(createdAt));
  // if (description)
  next();
};

module.exports = {
  validateName,
  validatePrice,
  validateCreatedAt,
  // validateDescription,
};
