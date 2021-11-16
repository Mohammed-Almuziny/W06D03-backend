const fs = require("fs");

let accounts = {};

fs.readFile("./db/accounts.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    accounts = JSON.parse(data.toString());
  }
});

const sginIn = (req, res) => {
  const newAccount = req.body;

  console.log(accounts);

  accounts.forEach((element) => {
    if (element.userName === newAccount.userName)
      res.status(404).json("user name already exists");
    if (element.email === newAccount.email)
      res.status(404).json("email already exists");
  });

  accounts.push(newAccount);

  fs.writeFile("./db/accounts.json", JSON.stringify(accounts), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      res.status(200).json(accounts);
    }
  });
};

module.exports = { sginIn };
