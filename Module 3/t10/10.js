document.getElementById("source").addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.querySelector("input[name='firstname']").value;
    const lname = document.querySelector("input[name='lastname']").value;
    document.getElementById("target").innerText = `Your name is ${fname} ${lname}`;

});