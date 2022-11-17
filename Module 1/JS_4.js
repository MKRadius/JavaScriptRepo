document.write("Exercise 4<br><br>")

let student, house_number, house;

student = prompt("What is your name?");
house_number = Math.floor(Math.random() * 4 + 1);

if (house_number === 1) {
    house = "Gryffindor";
}
else if (house_number === 2) {
    house = "Slytherin";
}
else if (house_number === 3) {
    house = "Hufflepuff";
}
else if (house_number === 4) {
    house = "Ravenclaw";
}

document.write(`${student}, you are ${house}`);