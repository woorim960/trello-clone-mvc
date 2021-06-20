"use strict";

export default class Http {
  static async get(url) {
    const stream = await fetch(url);
    if (stream.ok) var res = await stream.json();
    return { res, status: stream.status };
  }

  static async post(url, body) {
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    };

    const stream = await fetch(url, opt);
    if (stream.ok) var res = await stream.json();
    return { res, status: stream.status };
  }
}
