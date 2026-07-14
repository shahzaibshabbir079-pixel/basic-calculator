let input1 = document.querySelector("#firstnumber");
let input2 = document.querySelector("#Secondnumber");
let drop = document.querySelector("#dropdown");
let button = document.querySelector("#btn1");
let resultwala = document.querySelector("#result");

button.addEventListener("click", function() {
    console.log("button clicked");
    let firstnumb = Number(input1.value);
    let secondnumb = Number(input2.value);
    let operations = drop.value;
    let result;

    if (operations === "+") {
        result = firstnumb + secondnumb;
    }
    else if (operations === "-") {
        result = firstnumb - secondnumb;
    }
    else if (operations === "*") {
        result = firstnumb * secondnumb;
    }
    else if (operations === "/") {
        result = firstnumb / secondnumb;
    }

    console.log(result);
    resultwala.textContent = result;
});