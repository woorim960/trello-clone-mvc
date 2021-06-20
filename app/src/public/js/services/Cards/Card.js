"use strict";

export default class Card {
  #isSaved;
  node;

  constructor(node, attr = { id: "newCard", content: "", isSaved: false }) {
    this.#isSaved = attr.isSaved;

    this.node = document.createElement(node);
    if (this.#isSaved) {
      this.node.id = attr.id;
      this.node.classList.add("saved");
      this.node.classList.add("saved-card-box");
      this.node.innerHTML = `
        <span class="saved card-content">${attr.content}</span>
      `;
    } else {
      this.node.innerHTML = `
        <textarea cols="24" rows="4"></textarea>
        <div class="active btn-form">
          <span class="active btn add-btn">Add</span>
          <span class="active btn cancel-btn">X</span>
        </div>
      `;
    }
  }
}
