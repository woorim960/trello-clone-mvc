"use strict";

const express = require("express");
const app = express();

app.use("/home", require("./home"));

module.exports = app;
