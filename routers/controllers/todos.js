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

module.exports = { getTodos };
