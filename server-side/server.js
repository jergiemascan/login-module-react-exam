const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

dotenv.config({ path: "./config.env" });

// dev server
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, this is backend server👋🏻" });
});

// import routes
const auth = require("./routes/auth");
app.use("/auth", auth);

// connect to DB
mongoose
  .connect(
    "mongodb+srv://Jiji:Davao2022@cluster0.ze4n2.mongodb.net/form-validation?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    // console.log(con.connections);
    console.log("Connected to DB");
  });

// port
app.listen(3001, () => {
  console.log("Hello from server! We are listening on port 3001");
});
