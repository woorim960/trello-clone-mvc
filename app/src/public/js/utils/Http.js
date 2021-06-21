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

  static async put(url, body) {
    const opt = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    };

    const stream = await fetch(url, opt);
    if (stream.ok) var res = "PUT 요청은 응답 데이터가 없습니다.";
    return { res, status: stream.status };
  }
}
