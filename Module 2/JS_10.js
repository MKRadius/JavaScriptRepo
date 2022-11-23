document.write("Exercise 9<br><br>");

let candidates_num, candidates_name;
let candidates = [];
let votes;

candidates_num = +prompt("Number of candidates");
for (let i = 0; i < candidates_num; i++) {
    candidates_name = prompt(`Name for candidate ${i + 1}`)
    candidates[i] = {
        name: candidates_name,
        votes: 0
    }
}

let no_input = false;
while (!no_input) {
    for (let i = 0; i < candidates_num; i++) {
        votes = +prompt(`How many votes will you give ${candidates[i].name}`)

        if (votes == "") {
            no_input = true;
            break;
        }
        else {
            console.log(candidates[i].name, "was given ", votes, "votes");
            candidates[i].votes += votes;
        }

    }
}

candidates.sort((a, b) => (b.votes - a.votes));


console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes. <br>`);
console.log("results");


for (let i = 0; i < candidates_num; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes <br>`);
}

document.write("Results in console<br>");