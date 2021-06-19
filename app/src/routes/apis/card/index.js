"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./card.ctrl");

router.post("/", ctrl.card.create);
router.put("/:no", ctrl.card.update);
router.delete("/:no", ctrl.card.delete);

module.exports = router;
