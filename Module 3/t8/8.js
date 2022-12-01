function calculator(num1, num2, choice) {   
    if (choice === "add") {
        return num1 + num2;
    }
    else if (choice === "sub") {
        return num1 - num2;
    }
    else if (choice === "multi") {
        return num1 * num2;
    }
    else if (choice === "div") {
        return num1 / num2;
    }
    return 0;
}



document.getElementById("start").addEventListener("click", (e) => {
    e.preventDefault();

    const calcNum1 = parseInt(document.getElementById("num1").value);
    const calcNum2 = parseInt(document.getElementById("num2").value);
    const choice   = document.getElementById("operation").value;

    const result = calculator(calcNum1, calcNum2, choice);

    document.getElementById("result").innerText = `Result: ${result}`;
})
