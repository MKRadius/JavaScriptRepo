document.write("Exercise 6<br><br>");

let user_confirmation, input_number;

user_confirmation = confirm("Should I calculate the square root?")

if (user_confirmation === true) {
    input_number = parseInt(prompt("Input number"));
    if (input_number >= 0) {
        document.write(`Square root of ${input_number} is ${Math.sqrt(input_number)}`);
    }
    else {
        document.write("The square root of a negative number is not defined");
    }
}
else {
    document.write("The square root is not calculated");

}