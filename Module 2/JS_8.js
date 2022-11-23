document.write("Exercise 8<br><br>");

function concat(arr_str) {
    let temp = "";
    for (let i = 0; i < arr_str.length; i++) {
        temp += arr_str[i];
    }

    return temp;
}

let arr_items;
let arr_str = [], new_arr_str = [];

arr_items = parseInt(prompt("How many items do you want to input?"));
for (let i = 0; i < arr_items; i++) {
    arr_str[i] = prompt(`Input item ${i + 1}`);
}

new_arr_str = concat(arr_str);

document.write("Array: ", arr_str, "<br>");
document.write("Concatenated: ", new_arr_str, "<br>");