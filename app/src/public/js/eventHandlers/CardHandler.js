"use strict";

import List from "../services/Lists/List.js";
import Card from "../services/Cards/Card.js";
import Http from "../utils/Http.js";

export default class CardHandler {
  static async click(e) {
    const cardBox = e.target.parentNode.parentNode;
    const content = cardBox.childNodes[1].value;
    if (content.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");

    const listBox = cardBox.parentNode.parentNode;
    const { res, status } = await Http.post("/api/card", {
      listNo: listBox.id,
      content,
    });

    if (status === 201) {
      const attr = { id: res.no, content };
      Card.changeToSavedNode(cardBox, attr);
      List.show(listBox.childNodes[5]);
    }
  }

  static async keypress(e) {
    if (e.key === "Enter") {
      const cardBox = e.target.parentNode;
      const content = cardBox.childNodes[1].value;
      if (content.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");

      const listBox = cardBox.parentNode.parentNode;
      const { res, status } = await Http.post("/api/card", {
        listNo: listBox.id,
        content,
      });

      if (status === 201) {
        const attr = { id: res.no, content };
        Card.changeToSavedNode(cardBox, attr);
        List.show(listBox.childNodes[5]);
      }
    }
  }
}
