"use strict";

import Trello from "./services/Trello.js";
import Lists from "./services/Lists/Lists.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import ListController from "./services/Lists/ListController.js";
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
const dragged = {
  el: null,
};

listForm.addEventListener("dragstart", (e) => {
  const cardBox = e.target;
  dragged.el = cardBox;
});

listForm.addEventListener("dragover", (e) => e.preventDefault());
listForm.addEventListener("drop", async (e) => {
  const target = e.target;
  const [listBox, cardBox] = getBoxes(target);

  const list = trello.lists.getNodes(listBox.id);
  const { res, status } = await Http.put(`/api/cards/${dragged.el.id}`, {
    listNo: listBox.id,
    content: dragged.el.children[0].children[0].innerText,
  });
  listBox.children[1].appendChild(dragged.el);
});

// Function
function getBoxes(target) {
  const className = target.classList[1];

  let listBox;
  let cardBox;
  if (className === "saved-list-box") {
    listBox = target;
    cardBox = target.children[1];
  } else if (className === "list-title") {
    listBox = target.parentNode;
    cardBox = listBox.children[1];
  } else if (className === "add-card-btn") {
    listBox = target.parentNode;
    cardBox = listBox.children[1];
  } else if (className === "saved-card-box") {
    listBox = target.parentNode.parentNode;
    cardBox = target;
  } else if (className === "content-box") {
    listBox = target.parentNode.parentNode.parentNode;
    cardBox = target.parentNode;
  } else if (className === "card-content") {
    listBox = target.parentNode.parentNode.parentNode.parentNode;
    cardBox = target.parentNode.parentNode;
  } else throw "위치가 이상해요!";

  return [listBox, cardBox];
}
