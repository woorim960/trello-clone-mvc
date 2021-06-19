"use strict";

const ListStorage = require("../../../models/ListStorage");

const list = {
  create: async (req, res) => {
    const title = req.body.title;
    const isSave = await ListStorage.save(title);

    if (isSave) return res.status(201).json({ result: "success" });
    return res.status(404).json({
      result: "error",
      msg: "존재하지 않는 리소스입니다.",
    });
  },
};

module.exports = { list };
