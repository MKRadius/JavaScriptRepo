document.write("Exercise 4<br><br>");

let num_arr = [];
let user_input;

while (user_input != 0) {
    user_input = parseInt(prompt("Input number (0 to quit)"));
    num_arr.push(user_input);
}

num_arr.sort((a, b) => b - a);
console.log("Sorted number from largest to smallest");

for (let i = 0; i < num_arr.length; i++) {
    console.log(num_arr[i]);
}