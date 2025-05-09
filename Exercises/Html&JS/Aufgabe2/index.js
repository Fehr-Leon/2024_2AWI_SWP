function calculateAd() {
    console.log("Calcutale clicked!");


    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) + Number(inputB);

    let output = document.getElementById("output");

    output.innerHTML = result
}

function calculateSub() {
    console.log("Calculate clicked!");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) - Number(inputB);

    let output = document.getElementById("output");

    output.innerHTML = result

}


function calculateMult() {
    console.log("Calculate clicked!");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) * Number(inputB);

    let output = document.getElementById("output");

    output.innerHTML = result


}



function calculateDiv() {
    console.log("Calculate clicked!");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;


    let result = Number(inputA) / Number(inputB);

    let output = document.getElementById("output");

    output.innerHTML = result


}

