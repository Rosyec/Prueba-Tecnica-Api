const express = require("express");
const cors = require("cors");
const router = require("./src/routes/Controller");

require("dotenv").config();
require("./src/data/Connection");

const app = express();

app.set("port", 4000);

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(app.get("port"), () => {
    console.log("Server running on port:", app.get("port"));
});