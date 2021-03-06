"use strict";

export default class List {
  #isActive;
  #isSaved;
  node;

  constructor(node, attr = { id: "new", title: "", isSaved: false }) {
    this.#isActive = false;
    this.#isSaved = attr.isSaved;

    this.node = document.createElement(node);
    if (this.#isSaved) {
      this.node.id = attr.id;
      this.node.classList.add("saved");
      this.node.classList.add("saved-list-box");
      this.node.innerHTML = `
      <span class="saved list-title">${attr.title}</span>
      <div class="card-form"></div>
      <span class="btn add-card-btn">Add a card...</span>
    `;
    } else {
      this.node.id = "new";
      this.node.classList.add("list-box");
      this.node.innerHTML = "Add a list...";
    }
  }

  getIsActive() {
    return this.#isActive;
  }

  setIsActive(value) {
    this.#isActive = value;
  }

  changeToOriginNode() {
    this.#isActive = false;
    this.node.classList.remove("active");
    this.node.classList.remove("active-list-box");
    this.node.classList.add("list-box");
    this.node.innerHTML = "Add a list...";
  }

  changeToActiveNode() {
    this.node.classList.remove("list-box");
    this.node.classList.add("active");
    this.node.classList.add("active-list-box");
    this.node.innerHTML = `
      <input class="active list-input" type="text" placeholder="Add a list...">
      <div class="active btn-form">
        <span class="btn creation-btn">Save</span>
        <span class="btn cancel-btn">X</span>
      </div>
    `;
  }

  changeToSavedNode(title, id) {
    this.node.id = id;
    this.node.classList.remove("active");
    this.node.classList.remove("active-list-box");
    this.node.classList.add("saved");
    this.node.classList.add("saved-list-box");
    this.node.innerHTML = `
      <span class="list-title">${title}</span>
      <div class="card-form"></div>
      <span class="btn add-card-btn">Add a card...</span>
    `;
  }

  static show(node) {
    node.classList.remove("hidden");
  }

  static hide(node) {
    node.classList.add("hidden");
  }
}
