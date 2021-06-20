"use strict";

export default class Lists {
  #nodes;

  constructor() {
    this.#nodes = {};
  }

  append(node, id) {
    this.#nodes[id] = node;
  }

  getNodes(idx) {
    if (idx) return this.#nodes[idx];
    return this.#nodes;
  }
}
