document.write("Exercise 8<br><br>");

let start_year, end_year;

start_year = prompt("Input start year");
end_year = prompt("Input end year");

/*
for (let i = start_year; i <= end_year; i++) {    
    if (i % 4 === 0 && i % 100 != 0) {
        //document.write(`The year ${input_year} is a leap year`);

        li.innerText = i;
        ulist.appendChild(li);
    }
    else if (i % 100 === 0 && i % 400 === 0) {
        //document.write(`The year ${input_year} is a leap year`);
        
        li.innerText = i;
        ulist.appendChild(li);
    }
}

document.write(ulist)
*/
document.write("<ul>");
for (let i = start_year; i <= end_year; i++) {    
    
    if (i % 4 === 0 && i % 100 != 0) {
        document.write("<li>", i, "</li>");
    }
    else if (i % 100 === 0 && i % 400 === 0) {
        document.write("<li>", i, "</li>");
    }
}
document.write("</ul>")

