document.write("Exercise 2<br><br>");

/*
let part_num = prompt("Number of participants");
let part_name;

const ol = document.createElement("ol");

for (let i = 0; i < part_num; i++) {
    part_name = prompt(`Enter participant ${i + 1} name`)
    ol.innerHTML += `<li>${part_name}</li>`
}

document.body.appendChild(ol);
*/

let part_num = prompt("Number of participants");
let part_name = [];

const ol = document.createElement("ol")

for (let i = 0; i < part_num; i++) {
    part_name[i] = prompt(`Enter participant ${i + 1} name`);
    ol.innerHTML += `<li>${part_name[i]}</li>`;
}

document.body.appendChild(ol);