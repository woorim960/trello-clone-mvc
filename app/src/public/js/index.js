"use strict";

import List from "./services/List.js";
import ListHandler from "./eventHandlers/ListHandler.js";
import Http from "./utils/Http.js";

const list = new List("div");
const listHandler = new ListHandler(list);

const listForm = document.querySelector(".list-form");
const listBox = list.node;
listForm.appendChild(listBox);

// 이벤트 발동 시 this의 주체가 동적으로 변경되는 것을 방지
listHandler.click = listHandler.click.bind(listHandler);
listHandler.keypress = listHandler.keypress.bind(listHandler);

listForm.addEventListener("click", listHandler.click);
listForm.addEventListener("keypress", listHandler.keypress);
