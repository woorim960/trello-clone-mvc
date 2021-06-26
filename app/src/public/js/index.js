"use strict";

import Trello from "./services/Trello.js";
import Lists from "./services/Lists/Lists.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import ListController from "./services/Lists/ListController.js";
import Dragger from "./services/Drags/Dragger.js";
import DragController from "./services/Drags/DragController.js";
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
  const draggingNode = e.target;
  DragController.startDrag(dragger, draggingNode);
});

listForm.addEventListener("dragover", (e) => {
  e.preventDefault();
  DragController.moveDraggingNode(e.target);
});

listForm.addEventListener("dragend", async (e) => {
  DragController.insertDraggingNode(dragger, e.target);
});
