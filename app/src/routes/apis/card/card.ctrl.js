"use strict";

const CardStorage = require("../../../models/CardStorage");

const card = {
  create: async (req, res) => {
    const listNo = req.body.listNo;
    const content = req.body.content;

    let position = await CardStorage.findRecentPosition();
    position = position ? position + 1 : 1;

    const insertId = await CardStorage.save(listNo, content, position);

    if (insertId)
      return res
        .status(201)
        .json({ result: "success", no: insertId, position });
  },

  update: async (req, res) => {
    const no = req.params.no;
    const listNo = req.body.listNo;
    const content = req.body.content;
    const isUpdate = await CardStorage.update(no, listNo, content);

    if (isUpdate) return res.status(204).end();
    return res.status(404).json({
      result: "error",
      msg: "존재하지 않는 리소스입니다.",
    });
  },

  delete: async (req, res) => {
    const no = req.params.no;
    const isDelete = await CardStorage.delete(no);

    if (isDelete) return res.status(204).end();
    return res.status(404).json({
      result: "error",
      msg: "존재하지 않는 리소스입니다.",
    });
  },
};

module.exports = { card };
