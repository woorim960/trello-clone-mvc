"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./card.ctrl");

router.post("/", ctrl.card.create);

module.exports = router;
