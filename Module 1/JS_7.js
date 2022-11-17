document.write("Exercise 7<br><br>");

let roll_times, dice_num;
let sum_dices = 0;

roll_times = prompt("How many times do you want to roll?");
document.write("You want to roll ", roll_times, " times<br>");

for (let i = 0; i < roll_times; i++) {
    dice_num = Math.floor(Math.random() * 6 + 1);
    sum_dices += dice_num;

    document.write("You got ", dice_num, "<br>");
}

document.write("Total: ", sum_dices, "<br>");