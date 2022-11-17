document.write("Exercise 8<br><br>");

let start_year, end_year;

start_year = prompt("Input start year");
end_year = prompt("Input end year");

var ul = document.createElement("ul")
for (let i = start_year; i <= end_year; i++) {    
    
    if ((i % 4 === 0 && i % 100 != 0) || (i % 100 === 0 && i % 400 === 0)) {
        ul.innerHTML += `<li>${i}</li>`;
    }
}

document.body.appendChild(ul);


