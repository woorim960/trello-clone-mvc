"use strict";

import List from "./services/Lists/List.js";
import Lists from "./services/Lists/Lists.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import Card from "./services/Cards/Card.js";
import Http from "./utils/Http.js";

const listForm = document.querySelector(".list-form");

listForm.addEventListener("click", ListHandler.click);
listForm.addEventListener("keypress", ListHandler.keypress);

const { res } = await Http.get("/api/home");

const lists = new Lists();
res.lists.forEach((listBox) => {
  const listAttr = { id: listBox.no, title: listBox.title, isSaved: true };
  const list = new List("div", listAttr);

  listBox.cards.forEach((cardBox) => {
    const cardAttr = {
      id: cardBox.no,
      content: cardBox.content,
      isSaved: true,
    };

    const cardForm = list.node.childNodes[3];
    cardForm.appendChild(new Card("div", cardAttr).node);
  });

  lists.append(list, listAttr.id);
  listForm.appendChild(list.node);
});

const list = new List("div");
lists.append(list, "new");
listForm.appendChild(list.node);

export default lists;

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target.className === "list-form" || e.target.tagName === "BODY") {
    const list = lists.getNodes("new");
    list.changeToOriginNode();
  }
});
