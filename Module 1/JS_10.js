document.write("Exercise 10<br><br>");

let dices, sum_dices;
let counter = 0;
let comp_dice_num, comp_sum_eyes;

dices = parseInt(prompt("How many dice do you want to roll?"));
sum_dices = parseInt(prompt("Sum of the eyes?"));

for (i = 0; i < 10000; i++) {
    comp_dice_num = 0;
    comp_sum_eyes = 0;

    for (let j = 0; j < dices; j++) {
        comp_dice_num = Math.floor(Math.random() * 6 + 1);
        comp_sum_eyes += comp_dice_num;
    }

    if (comp_sum_eyes === sum_dices) {
        counter++;
    }
}

document.write(`Probability to get sum ${sum_dices} with ${dices} dices is ${(counter / 10000 * 100).toFixed(2)}%`)