"use strict";

import Dragger from "./Dragger.js";

export default class DragController {
  static startDrag(dragger, draggingNode) {
    draggingNode.classList.add("dragging");
    dragger.setDraggingNode(draggingNode);
  }

  static moveDraggingNode(target) {
    const draggingNode = document.querySelector(".dragging");
    const [listBox, cardBox] = Dragger.getDropedNodes(target);

    if (cardBox) {
      cardBox.parentNode.insertBefore(draggingNode, cardBox);
    } else listBox?.children[1].appendChild(draggingNode);
  }

  static async insertDraggingNode(dragger, target) {
    const draggingNode = dragger.getDraggingNode();
    draggingNode.classList.remove("dragging");

    const [listBox, cardBox] = Dragger.getDropedNodes(target);
    const requestBody = { listNo: listBox.id };
  }
}
