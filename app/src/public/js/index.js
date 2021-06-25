"use strict";

import Trello from "./services/Trello.js";
import Lists from "./services/Lists/Lists.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import ListController from "./services/Lists/ListController.js";
import Dragger from "./services/Drags/Dragger.js";
import Http from "./utils/Http.js";

const body = document.querySelector("body");
const listForm = document.querySelector(".list-form");

// 트렐로 메인화면 초기화
const trello = new Trello(new Lists(), listForm);
const { res } = await Http.get("/api/home");

trello.init(res.lists);
trello.createNewList();

export default trello.lists;

// 바탕화면 클릭시 '리스트 등록 노드'를 'Add a list...' 노드 로 바꾼다.
body.addEventListener("click", (e) => {
  const tag = e.target.tagName;
  if (tag === "ARTICLE" || tag === "BODY") {
    ListController.changeToOriginNode();
  }
});

listForm.addEventListener("click", ListHandler.click);
listForm.addEventListener("keypress", ListHandler.keypress);

// Drag & Drop
const dragger = new Dragger();
listForm.addEventListener("dragstart", (e) => {
  const draggedNode = e.target;
  draggedNode.classList.add("dragging");
  dragger.setDraggedNode(draggedNode);
});

listForm.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingNode = document.querySelector(".dragging");
  const [listBox, cardBox] = Dragger.getDropedNodes(e.target);

  if (cardBox) {
    cardBox.parentNode.insertBefore(draggingNode, cardBox);
  } else listBox?.children[1].appendChild(draggingNode);
});

listForm.addEventListener("dragend", async (e) => {
  const target = e.target;
  const draggedNode = dragger.getDraggedNode();
  draggedNode.classList.remove("dragging");

  const [listBox, cardBox] = Dragger.getDropedNodes(target);
  const { status } = await Http.put(`/api/cards/${draggedNode.id}`, {
    listNo: listBox.id,
    content: draggedNode.children[0].children[0].innerText,
  });

  if (status === 204) {
    if (cardBox) {
      cardBox.parentNode.insertBefore(draggedNode, cardBox);
    } else listBox?.children[1].appendChild(draggedNode);
  }
});
