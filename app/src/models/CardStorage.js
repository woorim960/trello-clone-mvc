"use strict";

const db = require("../config/db");

class CardStorage {
  static async findAll() {
    const sql = `SELECT no, list_no AS listNo, content FROM cards;`;

    try {
      const [cards, fields] = await db.promise().query(sql);
      return cards;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CardStorage;
