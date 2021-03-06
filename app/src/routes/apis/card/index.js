"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./card.ctrl");

router.post("/", ctrl.card.create);
router.put("/:no", ctrl.card.update);
router.patch("/:no/position", ctrl.card.updateOnePosition);
router.patch("/:dragNo/:dropNo/position", ctrl.card.updateAllPosition);
router.delete("/:no", ctrl.card.delete);

module.exports = router;
