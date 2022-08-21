const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, async () => {
  // app.locals.db = client;
  console.log(`server started on port ${PORT}`);
  // console.log("Connected to DB!");
});
app.get("/", function (req, res) {
  // console.log("");
  res.send("Success");
});
