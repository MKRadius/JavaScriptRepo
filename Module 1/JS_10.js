document.write("Exercise 10<br><br>");

let number_of_dices, sum_of_dices;
let counter = 0;
let comp_dice_num, comp_sum_eyes;

number_of_dices = parseInt(prompt("How many dice do you want to roll?"));
sum_of_dices = parseInt(prompt("Sum of the eyes?"));

for (i = 0; i < 10000; i++) {
    comp_dice_num = 0;
    comp_sum_eyes = 0;

    for (let j = 0; j < number_of_dices; j++) {
        comp_dice_num = Math.floor(Math.random() * 6 + 1);
        comp_sum_eyes += comp_dice_num;
    }

    if (comp_sum_eyes === sum_of_dices) {
        counter++;
    }
}

document.write(`Probability to get sum ${sum_of_dices} with ${number_of_dices} dices is ${(counter / 10000 * 100).toFixed(2)}%`);