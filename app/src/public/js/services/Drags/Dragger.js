"use strict";

export default class Dragger {
  #draggedNode;

  constructor() {
    this.#draggedNode = undefined;
  }

  getDraggedNode() {
    return this.#draggedNode;
  }

  setDraggedNode(draggedNode) {
    this.#draggedNode = draggedNode;
  }

  static getDropedNodes(target) {
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
}
