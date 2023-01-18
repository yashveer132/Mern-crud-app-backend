require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");
const PORT = process.env.PORT || 6010;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at port number ${PORT}`);
});
