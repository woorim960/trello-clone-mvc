"use strict";

export default class ListHandler {
  list;

  constructor(list) {
    this.list = list;
  }

  click(e) {
    if (!this.list.getIsActive()) this.list.changeToActiveNode();
    this.list.setIsActive(true);

    if (e.target.classList[1] === "creation-btn")
      console.log("리스트 제목을 등록합니다.");
  }

  keypress(e) {
    if (e.key === "Enter") {
      console.log("리스트 제목을 등록합니다.");
    }
  }
}
