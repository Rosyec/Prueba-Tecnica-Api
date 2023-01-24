const mongoose = require("mongoose");
const user     = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@cluster0.mfzggdc.mongodb.net/${database}`
  )
  .then(() => {
    console.log("Connection BD Mongo - OK");
  })
  .catch((error) => console.log("Connection BD Mongo - Error", error));