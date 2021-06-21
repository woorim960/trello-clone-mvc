"use strict";

import List from "./Lists/List.js";
import Card from "./Cards/Card.js";

export default class Trello {
  lists;
  listForm;

  constructor(lists, listForm) {
    this.lists = lists;
    this.listForm = listForm;
  }

  init(initLists) {
    initLists.forEach((initList) => {
      const listAttr = {
        id: initList.no,
        title: initList.title,
        isSaved: true,
      };

      const list = new List("div", listAttr);
      const initCards = initList.cards;

      initCards.forEach((initCard) => {
        const cardAttr = {
          id: initCard.no,
          content: initCard.content,
          isSaved: true,
        };

        const cardForm = list.node.childNodes[3];
        cardForm.appendChild(new Card("div", cardAttr).node);
      });

      this.lists.append(list, listAttr.id);
      this.listForm.appendChild(list.node);
    });
  }

  createNewList() {
    const list = new List("div");
    this.lists.append(list, "new");
    this.listForm.appendChild(list.node);
  }
}
