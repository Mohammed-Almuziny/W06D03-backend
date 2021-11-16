const fs = require("fs");

let accounts = [];

fs.readFile("./db/accounts.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    accounts = JSON.parse(data.toString());
  }
});

const getTodos = (req, res) => {
  const { userName } = req.params;

  const target = accounts.find((account) => account.userName === userName);

  res.status(200).json(target.todos);
};

const addTodos = (req, res) => {
  const { userName, todo } = req.params;

  accounts.forEach((account) => {
    if (account.userName === userName) account.todos.push(todo);
  });
  console.log(accounts);

  fs.writeFile("./db/accounts.json", JSON.stringify(accounts), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json(accounts);
    }
  });
};

module.exports = { getTodos, addTodos };
