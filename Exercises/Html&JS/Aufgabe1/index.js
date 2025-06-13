function calculateSum() {
    console.log("Calculete Clicked");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) + Number(inputB);


    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}

function calculateSub() {
    console.log("Calculete Clicked");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;

    let result = Number(inputA) - Number(inputB);


    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}
function calculateMul() {
    console.log("Calculete Clicked");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) * Number(inputB);


    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}


function calculateDiv() {
    console.log("Calculete Clicked");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) / Number(inputB);


    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}