"use strict";

const listBox = document.querySelector("div.list-box");

listBox.addEventListener("click", changeListBox);

let isActiveListBox = false;
function changeListBox() {
  if (!isActiveListBox) {
    listBox.classList.remove("list-box");
    listBox.classList.add("active-list-box");
    listBox.innerHTML = `
      <input class="list-input" type="text" placeholder="Add a list...">
      <div class="btn-form">
        <span class="btn creation-btn">Save</span>
        <span class="btn cancel-btn">X</span>
      </div>
    `;
  }
  isActiveListBox = true;
}
