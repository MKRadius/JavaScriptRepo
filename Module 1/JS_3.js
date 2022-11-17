document.write("Exercise 3<br><br>")

let a, b, c;

a = parseInt(prompt("Input value of a"))
b = parseInt(prompt("Input value of b"))
c = parseInt(prompt("Input value of c"))

document.write(`a = ${a}, b = ${b}, c = ${c} <br>`)
document.write("Sum = ", a + b + c, "<br>")
document.write("Product = ", a * b * c, "<br>")
document.write("Average = ", (a + b + c) / 3, "<br>")