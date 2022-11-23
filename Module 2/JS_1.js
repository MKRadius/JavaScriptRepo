document.write("Exercise 1<br><br>");

let user_array = [];

for (let i = 0; i < 5; i++) {
    user_array[i] = prompt(`Input number ${i + 1}`);
}

document.write("Array: ", user_array);
document.write("<br>");
document.write("Array in reversed order: ");

for (let i = user_array.length - 1; i > 0; i--) {
    document.write(user_array[i], ",");
}
