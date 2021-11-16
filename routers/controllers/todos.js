const getTodos = (req, res) => {
  res.status(200).json("todos");
};

module.exports = { getTodos };
