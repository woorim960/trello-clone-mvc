"use strict";

const express = require("express");
const app = express();

app.use("/home", require("./home"));
app.use("/list", require("./list"));
app.use("/card", require("./card"));
app.use("/cards", require("./card"));

module.exports = app;
