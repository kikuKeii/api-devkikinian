require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { User } = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const data = await User.findByPk(1);

    const result = {
      method: "GET",
      status: 200,
      message: "Hello World!",
      author: data,
    };
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    const result = {
      method: "GET",
      status: 500, // Set an appropriate status code for internal server error
      message: "Hello World!",
      author: "failed fetching data",
    };
    res.status(500).json(result);
  }
});

if (process.env.NODE_ENV == "development") {
  app.listen(port, () =>
    console.log(`App listening on port http://localhost:${port}!`)
  );
} else {
  app.listen();
}
