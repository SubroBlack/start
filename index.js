require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.use("/", express.static("build"));

app.use(express.json());

app.get("/trial", (req, res) => {
  res.send("Start Now");
});

app.use("/*", express.static("build"));

app.listen(process.env.PORT || 3001, () => {
  console.log(`Serve running on Port ${process.env.PORT}`);
});
