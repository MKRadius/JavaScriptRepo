document.write("Exercise 7<br><br>");

const roll_dice = (max_num) => Math.floor(Math.random() * max_num + 1);

let result, max_num;
const ul = document.createElement("ul");

max_num = prompt("Maximum number of the dice?");

do {
    result = roll_dice(max_num);
    ul.innerHTML += `<li>${result}</li>`;
} while (result != max_num);

document.body.appendChild(ul);