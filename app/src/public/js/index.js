"use strict";

import List from "./services/List.js";
import ListHandler from "./eventHandlers/ListHandler.js";

const list = new List("div");
const listHandler = new ListHandler(list);

const body = document.querySelector("body");
const listBox = list.node;
body.appendChild(listBox);

// 이벤트 발동 시 this의 주체가 동적으로 변경되는 것을 방지
listHandler.click = listHandler.click.bind(listHandler);
listHandler.keypress = listHandler.keypress.bind(listHandler);

listBox.addEventListener("click", listHandler.click);
listBox.addEventListener("keypress", listHandler.keypress);
