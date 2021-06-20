"use strict";

import List from "./services/List.js";
import Lists from "./services/Lists.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import Http from "./utils/Http.js";

const listForm = document.querySelector(".list-form");

listForm.addEventListener("click", ListHandler.click);
listForm.addEventListener("keypress", ListHandler.keypress);

const stream = await fetch("/api/home");
const listBoxes = await stream.json();

const lists = new Lists();
listBoxes.lists.forEach((listBox) => {
  const attr = { id: listBox.no, title: listBox.title, isSaved: true };
  const list = new List("div", attr);

  lists.append(list, attr.id);
  listForm.appendChild(list.node);
});

const list = new List("div");
lists.append(list, "-1");
listForm.appendChild(list.node);

export default lists;
