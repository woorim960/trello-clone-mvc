"use strict";

const express = require("express");
const app = express();

app.use("/home", require("./home"));
app.use("/list", require("./list"));

module.exports = app;
