document.write("Exercise 5<br><br>");

let input_year;

input_year = parseInt(prompt("Input year"));

if (input_year % 4 === 0 && input_year % 100 != 0) {
    document.write(`The year ${input_year} is a leap year`);
}
else if (input_year % 100 === 0 && input_year % 400 === 0) {
    document.write(`The year ${input_year} is a leap year`);
}
else {
    document.write(`The year ${input_year} is not a leap year`);
}