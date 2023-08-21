require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

// Just serving the Static Build Folder and nothing else
//app.use("/", express.static("build"));
//app.use("/*", express.static("build"));
app.get('/', (req, res) => {
  res.send(`Hello World! from ${process.env.PORT}, aaaand thats it. I gotta go, I'm busy. I have an interview coming up. Take Care :D`)
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on Port ${process.env.PORT || 3001}`);
});
