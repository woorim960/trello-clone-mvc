"use strict";

const CardStorage = require("../../../models/CardStorage");

const card = {
  create: async (req, res) => {
    const listNo = req.body.listNo;
    const content = req.body.content;
    const isSave = await CardStorage.save(listNo, content);

    if (isSave) return res.status(201).json({ result: "success" });
  },
};

module.exports = { card };
