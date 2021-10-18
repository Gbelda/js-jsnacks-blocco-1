//J snack 9 - calcola la somma e la media dei primi 10 numeri

var numbers = [];
for (var i = 0; i < 10; i++) {

    numbers.push(i)

}

var sum = 0
for (let index = 0; index < numbers.length; index++) {

    sum += numbers[index]

}

var avrg = sum / 10
console.log(avrg);

document.getElementById('snack-9').innerHTML =
    `Sum of numbers = ${sum} <br>
    Average = ${avrg}`