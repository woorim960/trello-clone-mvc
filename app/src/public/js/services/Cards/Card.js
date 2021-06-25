"use strict";

export default class Card {
  #isSaved;
  node;

  constructor(node, attr = { id: "newCard", content: "", isSaved: false }) {
    this.#isSaved = attr.isSaved;

    this.node = document.createElement(node);
    if (this.#isSaved) {
      this.node.id = attr.id;
      this.node.setAttribute("draggable", "true");
      this.node.classList.add("saved");
      this.node.classList.add("saved-card-box");
      this.node.innerHTML = `
        <div class="saved content-box">
          <span class="saved card-content">${attr.content}</span>
          <div class="icon">
            <i class="fas fa-pen"></i>
          </div>
        </div>
      `;
    } else {
      this.node.classList.add("active-card-box");
      this.node.innerHTML = `
        <textarea cols="24" rows="4"></textarea>
        <div class="btn-form">
          <span class="btn add-btn">Add</span>
          <span class="btn cancel-btn">X</span>
        </div>
      `;
    }
  }

  static changeToSavedNode(node, attr = { id, content }) {
    node.id = attr.id;
    node.setAttribute("draggable", "true");
    node.classList.remove("active-card-box");
    node.classList.add("saved");
    node.classList.add("saved-card-box");
    node.innerHTML = `
      <div class="saved content-box">
        <span class="saved card-content">${attr.content}</span>
        <div class="icon">
          <i class="fas fa-pen"></i>
        </div>
      </div>
    `;
  }
}
