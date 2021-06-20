"use strict";

import List from "./List.js";
import lists from "../../index.js";

export default class ListController {
  static saveNode(title, id) {
    const list = lists.getNodes("new");
    list.changeToSavedNode(title, id);
    lists.append(list, id);
  }

  static createActiveNode() {
    const newList = new List("div");
    const listForm = document.querySelector(".list-form");
    listForm.appendChild(newList.node);
    newList.changeToActiveNode();
    lists.append(newList, "new");
  }

  static changeToActiveNode() {
    const list = lists.getNodes("new");
    if (!list.getIsActive()) list.changeToActiveNode();
    list.setIsActive(true);
  }
}
