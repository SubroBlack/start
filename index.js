require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use("/", express.static("build"));
app.use("/*", express.static("build"));

app.listen(process.env.PORT, () => {
  console.log(`Serve running on Port ${process.env.PORT}`);
});
