require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const { calc } = require("./controller");

app.use(express.json());

app.get('/cal', calc)

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})