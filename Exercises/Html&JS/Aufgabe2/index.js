function generate() {
    let number1 = document.getElementById("InputA").value;
    let number2 = document.getElementById("InputB").value;

    let differenz = parseInt(number2) - parseInt(number1);


    let randomNumber = Math.floor(Math.random() * differenz) + parseInt(number1) + 1;
    console.log(randomNumber);

    document.getElementById("randomNumber").innerHTML = randomNumber;

}
