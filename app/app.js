"use strict";

// 모듈
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

// 라우트 모듈
const view = require("./src/routes/views");
const api = require("./src/routes/apis");

// 미들웨어 등록
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 미들웨어 등록
app.use("/", view);
app.use("/api/", api);

module.exports = app;
