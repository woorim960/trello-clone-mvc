"use strict";

const listBox = document.querySelector("div.list-box");

listBox.addEventListener("click", changeListBox);
listBox.addEventListener("keypress", keypressHandler);

let isActiveListBox = false;
function changeListBox(e) {
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

  if (e.target.classList[1] === "creation-btn")
    console.log("리스트 제목을 등록합니다.");
}

function keypressHandler(e) {
  if (e.key === "Enter") {
    console.log("리스트 제목을 등록합니다.");
  }
}
