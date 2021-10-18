//J snack 7 - stampa le potenze di 2 fino a 1000
let result = 1;
for (let index = 0; result < 1000; index++) {
    result = result * 2;
    document.getElementById("snack-7").insertAdjacentHTML('beforeend', `${result} <br>`)
}
