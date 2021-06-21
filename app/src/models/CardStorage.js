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

  static async save(listNo, content) {
    const sql = `INSERT INTO cards (list_no, content) VALUES (?, ?);`;

    try {
      const [result] = await db.promise().query(sql, [listNo, content]);
      return result.insertId;
    } catch (err) {
      throw err;
    }
  }

  static async update(no, listNo, content) {
    const sql = `UPDATE cards SET list_no=?, content=? WHERE no=?;`;

    try {
      const [result] = await db.promise().query(sql, [listNo, content, no]);
      return Boolean(result.affectedRows);
    } catch (err) {
      throw err;
    }
  }

  static async delete(no) {
    const sql = `DELETE FROM cards WHERE no=?;`;

    try {
      const [result] = await db.promise().query(sql, [no]);
      return Boolean(result.affectedRows);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CardStorage;
