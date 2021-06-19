"use strict";

export default class List {
  #isActive;
  node;

  constructor(node) {
    this.#isActive = false;

    this.node = document.createElement(node);
    this.node.classList.add("list-box");
    this.node.innerHTML = "Add a list...";
  }

  getIsActive() {
    return this.#isActive;
  }

  setIsActive(value) {
    this.#isActive = value;
  }

  changeToActiveNode() {
    this.node.classList.remove("list-box");
    this.node.classList.add("active-list-box");
    this.node.innerHTML = `
      <input class="list-input" type="text" placeholder="Add a list...">
      <div class="btn-form">
        <span class="btn creation-btn">Save</span>
        <span class="btn cancel-btn">X</span>
      </div>
    `;
  }

  changeToSavedNode(title) {
    this.node.classList.remove("active-list-box");
    this.node.classList.add("saved-list-box");
    this.node.innerHTML = `
      <span class="list-title">${title}</span>
      <span class="add-card-btn">Add a card...</span>
    `;
  }
}
