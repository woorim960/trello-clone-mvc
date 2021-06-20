"use strict";

export default class Card {
  #isSaved;
  node;

  constructor(node, attr = { id: "new", title: "", isSaved: false }) {
    this.node = document.createElement(node);
    this.node.innerHTML = `
      <textarea cols="24" rows="4"></textarea>
      <div class="active btn-form">
        <span class="active btn add-btn">Add</span>
        <span class="active btn cancel-btn">X</span>
      </div>
    `;
  }
}
