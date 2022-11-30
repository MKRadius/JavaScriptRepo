'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector("#target");

for (let i = 0; i < names.length; i++) {
    let name_list = document.createElement("li");
    name_list.innerText = names[i];

    ul.appendChild(name_list);
}