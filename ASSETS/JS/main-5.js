//J snack 5 - Crea un array vuoto. Chiedi per 6 volte all utente di inserire un numero, se e dispari, inseriscilo nell'array

let oddNumbers = []


for (let i = 0; i < 6; i++) {

    let userNumber = parseInt(prompt("Insert a randomNumber"))

    if (userNumber % 2 != 0) {
        oddNumbers.push(userNumber)

    }

}
