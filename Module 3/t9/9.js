function frag(str) {
    let new_str;

    if (str.includes("+")) {
        new_str = str.split("+");
        return [parseInt(new_str[0]), parseInt(new_str[1]), "add"];
    }
    else if (str.includes("-")) {
        new_str = str.split("-");
        return [parseInt(new_str[0]), parseInt(new_str[1]), "sub"];
    }
    else if (str.includes("*")) {
        new_str = str.split("*");
        return [parseInt(new_str[0]), parseInt(new_str[1]), "multi"];
    }
    else if (str.includes("/")) {
        new_str = str.split("/");
        return [parseInt(new_str[0]), parseInt(new_str[1]), "div"];
    }
}

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

    const str = document.getElementById("calculation").value;
    const [num1, num2, choice] = frag(str);
    const result = calculator(num1, num2, choice);

    document.getElementById("result").innerText = `Result: ${result}`;
})
