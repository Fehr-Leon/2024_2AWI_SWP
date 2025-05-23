function generate() {
    let number1 = praseInt(document.getElementById("InputA").value);
    let number2 = parseInt(document.getElementById("InputB").value);

    let differenz = parseInt(number2) - parseInt(number1);


    let randomNumber = Math.floor(Math.random() * differenz) + parseInt(number1);

    document.getElementById("randomNumber").innerHTML = randomNumber;

}
