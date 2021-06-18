"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./list.ctrl");

router.post("/", ctrl.list.create);

module.exports = router;
