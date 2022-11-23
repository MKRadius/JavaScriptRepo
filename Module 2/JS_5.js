document.write("Exercise 5<br><br>");

function check_existence(num, num_arr) {
    for (let i = 0; i < num_arr.length; i++) {
        if (num === num_arr[i]) {
            return true;
        }
    }

    return false;
}

let user_input;
let num_arr = [];

while (true) {
    user_input = parseInt(prompt("Input number"));
    if (checkExistence(user_input, num_arr)) {
        alert("Detected identical number");
        break;
    }
    else {
        num_arr.push(user_input);
    }
}

num_arr.sort((a, b) => a - b);

for (let i = 0; i < num_arr.length; i++) {
    console.log(num_arr[i]);
}

document.write("Results in console<br>");