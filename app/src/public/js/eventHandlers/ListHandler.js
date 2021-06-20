"use strict";

import ListController from "../services/Lists/ListController.js";
import Http from "../utils/Http.js";

export default class ListHandler {
  static async click(e) {
    const listStatus = e.target.classList[0];

    if (listStatus === "list-box") {
      // 기본 리스트를 클릭했을 때
      ListController.changeToActiveNode();
    } else if (listStatus === "active") {
      // 활성화된 리스트를 클릭했을 때
      const className = e.target.classList[2];
      if (className === "creation-btn") {
        // Save 버튼을 클릭했을 때
        const title = e.target.parentNode.parentNode.childNodes[1].value;
        if (title.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");

        const { res, status } = await Http.post("/api/list", { title });
        if (status === 201) {
          ListController.saveNode(title, res.no);
          ListController.createActiveNode();
        }
      }
    } else if (listStatus === "saved") {
      // 등록된 리스트를 클릭했을 대
      const className = e.target.classList[1];
      if (className === "add-card-btn") {
        console.log("새로운 카드를 추가합니다.");
      }
    }
  }

  static async keypress(e) {
    if (e.key === "Enter") {
      // 리스트 입력 후 엔터를 눌렀을 때
      const title = e.target.value;
      if (title.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");

      const { res, status } = await Http.post("/api/list", { title });
      if (status === 201) {
        ListController.saveNode(title, res.no);
        ListController.createActiveNode();
      }
    }
  }
}
