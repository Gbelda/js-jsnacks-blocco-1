//J snack 6 - Stampa il cubo dei primi N numeri. N = indicato dall'utente

let userNumber = parseInt(prompt("Insert a number"))
const cube = document.getElementById("snack-6")

cube.innerHTML = `${userNumber} elevato a 3 = ${Math.pow(userNumber, 3)}`
