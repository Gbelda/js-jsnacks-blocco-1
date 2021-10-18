//J snack 1 - Chiedere con dei prompt 2 numeri in successione e stampare il numero maggiore

const firstNumber = parseInt(prompt("Insert a random number"));
const secondNumber = parseInt(prompt("insert another random number"));
let bigger = document.getElementById("snack-1");

if (firstNumber > secondNumber) {
    bigger.innerHTML = `the bigger number entered is : ${firstNumber}`;

} else if (secondNumber > firstNumber) {
    bigger.innerHTML = `the bigger number entered is : ${secondNumber}`;

} else {
    bigger.innerHTML = `SAME NUMBER : ${firstNumber}`
}

