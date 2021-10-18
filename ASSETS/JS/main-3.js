//J snack 3 - Chiedere all'utente di inserire per 10 volte un numero, il programma stampa la somma di tutti i numeri inseriti


firstNumber = parseInt(prompt("Insert a number"))
secondNumber = parseInt(prompt("Insert a number"))
thirdNumber = parseInt(prompt("Insert a number"))
fourthNumber = parseInt(prompt("Insert a number"))
fifthNumber = parseInt(prompt("Insert a number"))
sixthNumber = parseInt(prompt("Insert a number"))
seventhNumber = parseInt(prompt("Insert a number"))
eightNumber = parseInt(prompt("Insert a number"))
ninthNumber = parseInt(prompt("Insert a number"))
tenthNumber = parseInt(prompt("Insert a number"))

const result = (firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber + sixthNumber + seventhNumber + eightNumber + ninthNumber + tenthNumber)
console.log(result);
document.getElementById("snack-3").innerHTML = `the sum of all the numbers is ${result}`