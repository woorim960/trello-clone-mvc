"use strict";

import List from "../services/List.js";
import lists from "../index.js";

export default class ListHandler {
  static async click(e) {
    const status = e.target.classList[0];
    if (status === "saved") {
      const className = e.target.classList[1];
      if (className === "add-card-btn") {
        console.log("새로운 카드를 추가합니다.");
      }
    } else if (status === "active") {
      const className = e.target.classList[2];
      if (className === "creation-btn") {
        const title = e.target.parentNode.parentNode.childNodes[1].value;
        if (title.length === 0) return alert("빈 리스트는 생성할 수 없습니다.");
        const req = { title };

        const stream = await fetch("/api/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(req),
        });

        if (stream.ok) {
          // active 리스트 -> saved 리스트로 변환
          const res = await stream.json();
          const list = lists.getNodes("-1");
          list.changeToSavedNode(title, res.no);
          lists.append(list, res.no);

          // 새 리스트 생성
          const newList = new List("div");
          const listForm = document.querySelector(".list-form");
          listForm.appendChild(newList.node);
          newList.changeToActiveNode();
          lists.append(newList, "-1");
        }
      }
    } else {
      const list = lists.getNodes("-1");
      if (!list.getIsActive()) list.changeToActiveNode();
      list.setIsActive(true);
    }
  }

  static keypress(e) {
    if (e.key === "Enter") {
      console.log("리스트 제목을 등록합니다.");
    }
  }
}
