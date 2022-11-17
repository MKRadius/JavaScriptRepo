document.write("Exercise 9<br><br>");

let num;

num = parseInt(prompt("Input number"));

document.write(num);

if (num < 0) {
    document.write(" -> Negative numbers are excluded");
}
else if (num === 0 || num === 1) {
    document.write(" is not a prime number");
}
else {
    let is_prime = true;
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            is_prime = false;
        }
    }

    if (is_prime === true) {
        document.write(" is a prime number");
    }
    else {
        document.write(" is not a prime number");
    }
}