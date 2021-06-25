"use strict";

import ListController from "../services/Lists/ListController.js";
import CardHandler from "./CardHandler.js";
import ButtonHandler from "./ButtonHandler.js";
import Http from "../utils/Http.js";

export default class ListHandler {
  static async click(e) {
    const type = e.target.classList[0];

    if (type === "btn") {
      ButtonHandler.click(e);
    } else if (type === "list-box") {
      // 기본 리스트를 클릭했을 때
      ListController.changeToActiveNode();
    }
  }

  static async keypress(e) {
    if (e.key === "Enter") {
      // 리스트 입력 후 엔터를 눌렀을 때
      const type = e.target.parentNode.parentNode.classList[0];
      if (type === "card-form") return CardHandler.keypress(e);

      const title = e.target.value;
      await ListHandler.createList(title);
    }
  }

  static async createList(title) {
    if (title.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");

    const { res, status } = await Http.post("/api/list", { title });
    if (status === 201) {
      ListController.saveNode(title, res.no);
      ListController.createActiveNode();
    }
  }
}
