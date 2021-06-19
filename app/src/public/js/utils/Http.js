"use strict";

export default class Http {
  static async get(url, accept = "json") {
    let res = undefined;

    const stream = await fetch(url);
    if (stream.ok) res = await stream[accept]();
    return { res, isSuccess: Boolean(stream.ok), status: stream.status };
  }

  static async post(
    url,
    body,
    contentType = "application/json",
    accept = "json"
  ) {
    const opt = {
      method: "POST",
      headers: {
        "Content-Type": contentType,
      },
      body,
    };
    console.log(body);
    let res;
    const stream = await fetch(url, opt);
    if (stream.ok) res = await stream[accept]();
    return { res, isSuccess: Boolean(stream.ok), status: stream.status };
  }
}
