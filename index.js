const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On Port ${PORT}`);
});
