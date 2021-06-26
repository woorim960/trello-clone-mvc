"use strict";

import Dragger from "./Dragger.js";
import Http from "../../utils/Http.js";

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

    if (cardBox?.nextSibling) {
      const URL = `/api/cards/${draggingNode.id}/${cardBox.nextSibling.id}/position`;
      const { status } = await Http.patch(URL, requestBody);

      if (status === 204)
        cardBox.parentNode.insertBefore(draggingNode, cardBox);
    } else {
      const URL = `/api/cards/${draggingNode.id}/position`;
      const { status } = await Http.patch(URL, requestBody);

      if (status === 204) listBox?.children[1].appendChild(draggingNode);
    }
  }
}
