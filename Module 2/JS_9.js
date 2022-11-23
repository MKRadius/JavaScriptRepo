document.write("Exercise 9<br><br>");

function even(num_arr) {
    let temp = [];
    for (let i = 0; i < num_arr.length; i++) {
        if (num_arr[i] % 2 === 0) {
            temp.push(num_arr[i]);
        }
    }
    return temp;
}

let num;
let num_arr = [], new_num_arr = [];

num = parseInt(prompt("How many numbers do you want to input?"));
for (let i = 0; i < num; i++) {
    num_arr[i] = parseInt(prompt(`Input number ${i + 1}`));
}

new_num_arr = even(num_arr);

document.write("Array:", num_arr, "<br>");
document.write("New array: ", new_num_arr, "<br>");
