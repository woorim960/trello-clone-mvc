"use strict";

const db = require("../config/db");

class ListStorage {
  static async findAll() {
    const sql = `SELECT * FROM lists;`;

    try {
      const [lists] = await db.promise().query(sql);
      return lists;
    } catch (err) {
      throw err;
    }
  }

  static async save(title) {
    const sql = `INSERT INTO lists (title) VALUES (?);`;

    try {
      const [result] = await db.promise().query(sql, [title]);
      return result.insertId;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ListStorage;
