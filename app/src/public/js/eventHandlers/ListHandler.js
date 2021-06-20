"use strict";

import lists from "../index.js";
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
      // 등록된 리스트를 클릭했을 때
      const className = e.target.classList[1];
      if (className === "add-card-btn") {
        const listBox = e.target.parentNode;
        const cardAddBtn = listBox.childNodes[5];
        cardAddBtn.classList.add("hidden");

        const cardForm = listBox.childNodes[3];
        cardForm.innerHTML = `
          <textarea cols="24" rows="4"></textarea>
          <div class="active btn-form">
            <span class="active btn add-btn">Add</span>
            <span class="active btn cancel-btn">X</span>
          </div>
        `;
      }
    }
  }

  static async keypress(e) {
    if (e.key === "Enter") {
      // 리스트 입력 후 엔터를 눌렀을 때
      const type = e.target.parentNode.classList[0];
      if (type === "card-form") {
        console.log("카드를 등록합니다.");
      } else {
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
}
