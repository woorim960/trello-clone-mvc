"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./card.ctrl");

router.post("/", ctrl.card.create);
router.put("/:no", ctrl.card.update);

module.exports = router;
