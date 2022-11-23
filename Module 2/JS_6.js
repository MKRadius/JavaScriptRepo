document.write("Exercise 6<br><br>");

function roll_dice() {
    return Math.floor(Math.random() * 6 + 1);
}

let result;
const ul = document.createElement("ul");

do {
    result = roll_dice();
    ul.innerHTML += `<li>${result}</li>`;
} while (result != 6);

document.body.appendChild(ul);