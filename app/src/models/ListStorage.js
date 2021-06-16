"use strict";

const db = require("../config/db");

class ListStorage {
  static async findAll() {
    const sql = `SELECT * FROM lists;`;

    try {
      const [lists, fields] = await db.promise().query(sql);
      return lists;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ListStorage;
