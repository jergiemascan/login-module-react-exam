const mongoose = require("mongoose");
const express = require("express");
const app = express();

// build process
const path = require("path");
app.use(express.static(path.join(__dirname, "/client-side/build")));

// const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, this is backend server👋🏻" });
});

const auth = require("./server-side/routes/auth");
app.use("/auth", auth);

mongoose
  .connect(
    process.env.DATABASE,

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    console.log("Connected to DB");
  });

// port
app.listen(3001, () => {
  console.log("Hello from server! We are listening on port 3001");
});
