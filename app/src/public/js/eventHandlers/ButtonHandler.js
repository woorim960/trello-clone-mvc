"use strict";

import List from "../services/Lists/List.js";
import ListController from "../services/Lists/ListController.js";
import Card from "../services/Cards/Card.js";
import CardHandler from "./CardHandler.js";
import ListHandler from "./ListHandler.js";

export default class ButtonHandler {
  static async click(e) {
    const type = e.target.classList[1];
    if (type === "creation-btn") {
      // 리스트 폼의 Save 버튼을 클릭했을 때
      const title = e.target.parentNode.parentNode.childNodes[1].value;
      await ListHandler.createList(title);
    } else if (type === "add-btn") {
      // Card 폼의 Add 버튼을 클릭했을 때
      CardHandler.click(e);
    } else if (type === "add-card-btn") {
      // 카드 추가(Add a list...) 버튼을 클릭했을 때
      const listBox = e.target.parentNode;
      List.hide(listBox.childNodes[5]);

      const cardForm = listBox.childNodes[3];
      cardForm.appendChild(new Card("div").node);
    }
  }
}
