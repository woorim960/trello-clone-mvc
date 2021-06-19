"use strict";

import List from "../services/List.js";

export default class ListHandler {
  list;

  constructor(list) {
    this.list = list;
  }

  async click(e) {
    if (!this.list.getIsActive()) this.list.changeToActiveNode();
    this.list.setIsActive(true);

    if (e.target.classList[1] === "creation-btn") {
      const title = e.target.parentNode.parentNode.childNodes[1].value;
      const req = { title };

      const stream = await fetch("/api/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(req),
      });

      if (stream.ok) {
        this.list.changeToSavedNode(title);
        const list = new List("div");

        const listForm = document.querySelector(".list-form");
        const listBox = list.node;
        listForm.appendChild(listBox);
        list.changeToActiveNode();
      }
    }
  }

  keypress(e) {
    if (e.key === "Enter") {
      console.log("리스트 제목을 등록합니다.");
    }
  }
}
