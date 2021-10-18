//J snack 8 - Chiedi un numero a 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero


let userNumbers = prompt('Enter a 4 digit number')


var sum = 0
for (let index = 0; index < userNumbers.length; index++) {

    sum += parseInt(userNumbers[index])

}
document.getElementById("snack-8").innerHTML = `The sum of your number is: ${sum}`


