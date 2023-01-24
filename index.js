const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/data/Connection");

const app = express();

app.set("port", 4000);

app.use(express.json());

app.use(cors());

app.listen(app.get("port"), () => {
  console.log("Server running on port:", app.get("port"));
});